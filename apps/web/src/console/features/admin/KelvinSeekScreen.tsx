/**
 * `/ranger/admin/kelvinseek` (PLAN §7.4 «uso de KelvinSeek»): the in-game assistant's usage per day
 * (`KelvinUsageDaily`: requests, fallbacks to the offline answers, tokens, cost) against the daily
 * budget, over 7, 30 or 90 days, and its configuration (`SiteSetting.kelvinseek`: on/off, model,
 * daily budget in USD, timeout). The budget in force is the stored setting or the environment
 * default.
 */
import { formatDate, toIntlLocale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Banner } from '@sotf/ui/banner';
import { cn } from '@sotf/ui/cn';
import { ChartFigure, StatTile } from '@sotf/ui/domain';
import { Field } from '@sotf/ui/field';
import { Input } from '@sotf/ui/input';
import { Switch } from '@sotf/ui/switch';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { type FormEvent, useMemo } from 'react';
import { DomainI18nBridge } from '../../components/DomainI18nBridge.tsx';
import { type KelvinDays, kelvinUsageQuery } from './api.ts';
import { ADMIN_LIMITS } from './constants.ts';
import { DailyBars } from './DailyBars.tsx';
import {
  asBoolean,
  asNumber,
  asRecord,
  asString,
  SettingFooter,
  useSettingDraft,
  useUnsavedGuard,
} from './setting-draft.tsx';
import {
  AdminHeader,
  formatCount,
  formatDay,
  formatShare,
  formatUsd,
  locale,
  Panel,
  TableScroller,
  tdClasses,
  thClasses,
} from './shared.tsx';

const RANGES: readonly KelvinDays[] = ['7', '30', '90'];

function shortDay(day: string): string {
  try {
    return new Intl.DateTimeFormat(toIntlLocale(locale()), {
      day: 'numeric',
      month: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(`${day}T00:00:00Z`));
  } catch {
    return formatDate(locale(), `${day}T00:00:00Z`, 'short');
  }
}

export function KelvinSeekScreen({ days }: { days: KelvinDays }) {
  const { data: usage } = useSuspenseQuery(kelvinUsageQuery(days));
  const series = useMemo(() => [...usage.days].sort((a, b) => a.day.localeCompare(b.day)), [usage.days]);
  const totals = useMemo(
    () =>
      series.reduce(
        (sum, day) => ({
          requests: sum.requests + day.requests,
          fallbacks: sum.fallbacks + day.fallbacks,
          tokensIn: sum.tokensIn + day.tokensIn,
          tokensOut: sum.tokensOut + day.tokensOut,
          cost: sum.cost + day.costUsd,
        }),
        { requests: 0, fallbacks: 0, tokensIn: 0, tokensOut: 0, cost: 0 },
      ),
    [series],
  );
  const budgetShare = usage.budgetUsd > 0 ? usage.todayCostUsd / usage.budgetUsd : 0;
  const overBudgetDays = usage.budgetUsd > 0 ? series.filter((day) => day.costUsd > usage.budgetUsd).length : 0;

  return (
    <DomainI18nBridge>
      <div className="grid gap-6">
        <AdminHeader
          title={m.admin_kelvin_title()}
          description={m.admin_kelvin_description()}
          actions={
            <nav aria-label={m.admin_range_label()} className="flex rounded-md border border-border p-0.5">
              {RANGES.map((range) => (
                <Link
                  key={range}
                  to="/ranger/admin/kelvinseek"
                  search={range === '30' ? {} : { days: range }}
                  aria-current={range === days ? 'page' : undefined}
                  className={cn(
                    'inline-flex min-h-9 items-center rounded-sm px-3 text-sm font-medium text-fg-muted hover:text-fg',
                    'aria-[current=page]:bg-primary/12 aria-[current=page]:text-fg',
                  )}
                >
                  {m.admin_range_days({ count: Number(range) })}
                </Link>
              ))}
            </nav>
          }
        />

        {budgetShare >= 0.8 ? (
          <Banner tone={budgetShare >= 1 ? 'danger' : 'warning'} title={m.admin_kelvin_budget_alert_title()}>
            {m.admin_kelvin_budget_alert_text({ share: formatShare(budgetShare) })}
          </Banner>
        ) : null}

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <StatTile label={m.admin_kelvin_today()} value={usage.todayCostUsd} display={formatUsd(usage.todayCostUsd)} />
          <StatTile label={m.admin_kelvin_budget()} value={usage.budgetUsd} display={formatUsd(usage.budgetUsd)} />
          <StatTile label={m.admin_kelvin_requests({ count: Number(days) })} value={totals.requests} />
          <StatTile
            label={m.admin_kelvin_fallbacks()}
            value={totals.fallbacks}
            display={totals.requests > 0 ? formatShare(totals.fallbacks / totals.requests) : '—'}
          />
        </div>
        <div className="grid gap-1" aria-hidden="true">
          <div className="h-2 overflow-hidden rounded-full bg-fg/10">
            <div
              className={cn(
                'h-full rounded-full',
                budgetShare >= 1 ? 'bg-danger' : budgetShare >= 0.8 ? 'bg-warning' : 'bg-success',
              )}
              style={{ width: `${Math.min(100, budgetShare * 100)}%` }}
            />
          </div>
        </div>
        <p className="text-sm text-fg-muted">
          {m.admin_kelvin_budget_used({
            spent: formatUsd(usage.todayCostUsd),
            budget: formatUsd(usage.budgetUsd),
            share: formatShare(budgetShare),
          })}
        </p>

        <Panel
          title={m.admin_kelvin_chart_title({ count: Number(days) })}
          description={m.admin_kelvin_chart_description({
            cost: formatUsd(totals.cost),
            tokensIn: formatCount(totals.tokensIn),
            tokensOut: formatCount(totals.tokensOut),
            over: overBudgetDays,
          })}
        >
          {series.length === 0 ? (
            <p className="text-sm text-fg-muted">{m.admin_kelvin_no_usage()}</p>
          ) : (
            <>
              <ChartFigure
                title={m.admin_kelvin_cost_per_day()}
                series={[{ key: 'cost', label: m.admin_kelvin_col_cost() }]}
                rowHeader={m.admin_kelvin_col_day()}
                rows={[...series].reverse().map((day) => ({ label: formatDay(day.day), cost: formatUsd(day.costUsd) }))}
                height={220}
              >
                <DailyBars
                  days={series.map((day) => ({ day: day.day, value: day.costUsd }))}
                  limit={usage.budgetUsd > 0 ? usage.budgetUsd : null}
                  formatValue={formatUsd}
                  formatDay={shortDay}
                  height={220}
                />
              </ChartFigure>
              <details className="text-sm">
                <summary className="cursor-pointer text-fg-muted hover:text-fg">{m.admin_kelvin_detail()}</summary>
                <div className="mt-2">
                  <TableScroller label={m.admin_kelvin_detail()}>
                    <table className="w-full border-collapse text-xs tabular-nums">
                      <thead className="bg-sunken">
                        <tr>
                          <th scope="col" className={thClasses}>
                            {m.admin_kelvin_col_day()}
                          </th>
                          <th scope="col" className={`${thClasses} text-end`}>
                            {m.admin_kelvin_col_requests()}
                          </th>
                          <th scope="col" className={`${thClasses} text-end`}>
                            {m.admin_kelvin_col_fallbacks()}
                          </th>
                          <th scope="col" className={`${thClasses} text-end`}>
                            {m.admin_kelvin_col_tokens_in()}
                          </th>
                          <th scope="col" className={`${thClasses} text-end`}>
                            {m.admin_kelvin_col_tokens_out()}
                          </th>
                          <th scope="col" className={`${thClasses} text-end`}>
                            {m.admin_kelvin_col_cost()}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...series].reverse().map((day) => (
                          <tr key={day.day} className="border-t border-border">
                            <th scope="row" className={`${tdClasses} text-start font-normal text-fg-muted`}>
                              {formatDay(day.day)}
                            </th>
                            <td className={`${tdClasses} text-end`}>{formatCount(day.requests)}</td>
                            <td className={`${tdClasses} text-end`}>{formatCount(day.fallbacks)}</td>
                            <td className={`${tdClasses} text-end`}>{formatCount(day.tokensIn)}</td>
                            <td className={`${tdClasses} text-end`}>{formatCount(day.tokensOut)}</td>
                            <td
                              className={cn(
                                `${tdClasses} text-end`,
                                usage.budgetUsd > 0 && day.costUsd > usage.budgetUsd && 'font-semibold text-danger',
                              )}
                            >
                              {formatUsd(day.costUsd)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </TableScroller>
                </div>
              </details>
            </>
          )}
        </Panel>

        <KelvinConfigPanel />
      </div>
    </DomainI18nBridge>
  );
}

interface KelvinDraft {
  enabled: boolean;
  model: string;
  dailyBudgetUsd: string;
  timeoutMs: string;
}

const normalizeKelvin = (value: unknown): KelvinDraft => {
  const record = asRecord(value);
  return {
    enabled: asBoolean(record.enabled, true),
    model: asString(record.model),
    dailyBudgetUsd: String(asNumber(record.dailyBudgetUsd, 0)),
    timeoutMs: String(asNumber(record.timeoutMs, 8000)),
  };
};
const serializeKelvin = (draft: KelvinDraft) => ({
  enabled: draft.enabled,
  model: draft.model.trim(),
  dailyBudgetUsd: Number(draft.dailyBudgetUsd.replace(',', '.')),
  timeoutMs: Number(draft.timeoutMs),
});

function KelvinConfigPanel() {
  const state = useSettingDraft('kelvinseek', normalizeKelvin, serializeKelvin, m.admin_kelvin_saved());
  useUnsavedGuard(state.dirty);
  const { draft } = state;
  const budget = Number(draft.dailyBudgetUsd.replace(',', '.'));
  const timeout = Number(draft.timeoutMs);
  const errors = {
    model: !draft.model.trim() ? m.admin_error_required() : undefined,
    budget:
      !draft.dailyBudgetUsd.trim() || !Number.isFinite(budget) || budget < 0 || budget > ADMIN_LIMITS.kelvinBudgetMax
        ? m.admin_kelvin_error_budget({ max: ADMIN_LIMITS.kelvinBudgetMax })
        : undefined,
    timeout:
      !/^\d+$/.test(draft.timeoutMs.trim()) ||
      timeout < ADMIN_LIMITS.kelvinTimeoutMin ||
      timeout > ADMIN_LIMITS.kelvinTimeoutMax
        ? m.admin_kelvin_error_timeout({ min: ADMIN_LIMITS.kelvinTimeoutMin, max: ADMIN_LIMITS.kelvinTimeoutMax })
        : undefined,
  };
  const invalid = Object.values(errors).some(Boolean);

  return (
    <Panel title={m.admin_kelvin_config_title()} description={m.admin_kelvin_config_description()}>
      <form
        noValidate
        className="grid gap-4"
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          if (!invalid) void state.save();
        }}
      >
        <Switch
          label={m.admin_kelvin_enabled()}
          description={m.admin_kelvin_enabled_hint()}
          checked={draft.enabled}
          onCheckedChange={(enabled) => state.setDraft((previous) => ({ ...previous, enabled }))}
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Field label={m.admin_kelvin_model()} error={errors.model}>
            <Input
              value={draft.model}
              maxLength={ADMIN_LIMITS.kelvinModelMax}
              spellCheck={false}
              className="font-mono"
              onChange={(event) => {
                const model = event.currentTarget.value;
                state.setDraft((previous) => ({ ...previous, model }));
              }}
            />
          </Field>
          <Field
            label={m.admin_kelvin_daily_budget()}
            description={m.admin_kelvin_daily_budget_hint()}
            error={errors.budget}
          >
            <Input
              inputMode="decimal"
              value={draft.dailyBudgetUsd}
              onChange={(event) => {
                const dailyBudgetUsd = event.currentTarget.value;
                state.setDraft((previous) => ({ ...previous, dailyBudgetUsd }));
              }}
            />
          </Field>
          <Field label={m.admin_kelvin_timeout()} error={errors.timeout}>
            <Input
              inputMode="numeric"
              value={draft.timeoutMs}
              onChange={(event) => {
                const timeoutMs = event.currentTarget.value;
                state.setDraft((previous) => ({ ...previous, timeoutMs }));
              }}
            />
          </Field>
        </div>
        <SettingFooter state={state} disabled={invalid} />
      </form>
    </Panel>
  );
}
