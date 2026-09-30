/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ works: NonNullable<unknown>, broken: NonNullable<unknown>, pending: NonNullable<unknown> }} Content_Radar_Bar_LabelInputs */

const en_content_radar_bar_label = /** @type {(inputs: Content_Radar_Bar_LabelInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("en", i?.works, {});
	const broken__number = registry.number("en", i?.broken, {});
	const pending__number = registry.number("en", i?.pending, {});return /** @type {LocalizedString} */ (`${works__number} working, ${broken__number} broken, ${pending__number} waiting for reports`)
};

const es_content_radar_bar_label = /** @type {(inputs: Content_Radar_Bar_LabelInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("es", i?.works, {});
	const broken__number = registry.number("es", i?.broken, {});
	const pending__number = registry.number("es", i?.pending, {});return /** @type {LocalizedString} */ (`${works__number} funcionan, ${broken__number} rotos, ${pending__number} esperan reportes`)
};

const de_content_radar_bar_label = /** @type {(inputs: Content_Radar_Bar_LabelInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("de", i?.works, {});
	const broken__number = registry.number("de", i?.broken, {});
	const pending__number = registry.number("de", i?.pending, {});return /** @type {LocalizedString} */ (`${works__number} funktionieren, ${broken__number} kaputt, ${pending__number} warten auf Berichte`)
};

const fr_content_radar_bar_label = /** @type {(inputs: Content_Radar_Bar_LabelInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("fr", i?.works, {});
	const broken__number = registry.number("fr", i?.broken, {});
	const pending__number = registry.number("fr", i?.pending, {});return /** @type {LocalizedString} */ (`${works__number} fonctionnent, ${broken__number} cassés, ${pending__number} en attente de rapports`)
};

const it_content_radar_bar_label = /** @type {(inputs: Content_Radar_Bar_LabelInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("it", i?.works, {});
	const broken__number = registry.number("it", i?.broken, {});
	const pending__number = registry.number("it", i?.pending, {});return /** @type {LocalizedString} */ (`${works__number} funzionano, ${broken__number} rotte, ${pending__number} in attesa di segnalazioni`)
};

const nl_content_radar_bar_label = /** @type {(inputs: Content_Radar_Bar_LabelInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("nl", i?.works, {});
	const broken__number = registry.number("nl", i?.broken, {});
	const pending__number = registry.number("nl", i?.pending, {});return /** @type {LocalizedString} */ (`${works__number} werken, ${broken__number} kapot, ${pending__number} wachten op meldingen`)
};

const pl_content_radar_bar_label = /** @type {(inputs: Content_Radar_Bar_LabelInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("pl", i?.works, {});
	const broken__number = registry.number("pl", i?.broken, {});
	const pending__number = registry.number("pl", i?.pending, {});return /** @type {LocalizedString} */ (`Działa: ${works__number}, zepsute: ${broken__number}, czeka na zgłoszenia: ${pending__number}`)
};

const pt_content_radar_bar_label = /** @type {(inputs: Content_Radar_Bar_LabelInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("pt", i?.works, {});
	const broken__number = registry.number("pt", i?.broken, {});
	const pending__number = registry.number("pt", i?.pending, {});return /** @type {LocalizedString} */ (`${works__number} funcionam, ${broken__number} quebrados, ${pending__number} aguardando relatos`)
};

const ru_content_radar_bar_label = /** @type {(inputs: Content_Radar_Bar_LabelInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("ru", i?.works, {});
	const broken__number = registry.number("ru", i?.broken, {});
	const pending__number = registry.number("ru", i?.pending, {});return /** @type {LocalizedString} */ (`Работают: ${works__number}, сломаны: ${broken__number}, ждут отчётов: ${pending__number}`)
};

const sv_content_radar_bar_label = /** @type {(inputs: Content_Radar_Bar_LabelInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("sv", i?.works, {});
	const broken__number = registry.number("sv", i?.broken, {});
	const pending__number = registry.number("sv", i?.pending, {});return /** @type {LocalizedString} */ (`${works__number} fungerar, ${broken__number} trasiga, ${pending__number} väntar på rapporter`)
};

const tr_content_radar_bar_label = /** @type {(inputs: Content_Radar_Bar_LabelInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("tr", i?.works, {});
	const broken__number = registry.number("tr", i?.broken, {});
	const pending__number = registry.number("tr", i?.pending, {});return /** @type {LocalizedString} */ (`${works__number} çalışıyor, ${broken__number} bozuk, ${pending__number} rapor bekliyor`)
};

const zh_content_radar_bar_label = /** @type {(inputs: Content_Radar_Bar_LabelInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("zh", i?.works, {});
	const broken__number = registry.number("zh", i?.broken, {});
	const pending__number = registry.number("zh", i?.pending, {});return /** @type {LocalizedString} */ (`${works__number} 个可用，${broken__number} 个失效，${pending__number} 个等待报告`)
};

const ja_content_radar_bar_label = /** @type {(inputs: Content_Radar_Bar_LabelInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("ja", i?.works, {});
	const broken__number = registry.number("ja", i?.broken, {});
	const pending__number = registry.number("ja", i?.pending, {});return /** @type {LocalizedString} */ (`動作 ${works__number}、不具合 ${broken__number}、報告待ち ${pending__number}`)
};

/**
* | output |
* | --- |
* | "{works__number} working, {broken__number} broken, {pending__number} waiting for reports" |
*
* @param {Content_Radar_Bar_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_bar_label = /** @type {((inputs: Content_Radar_Bar_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Bar_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_bar_label(inputs)
	if (locale === "de") return de_content_radar_bar_label(inputs)
	if (locale === "fr") return fr_content_radar_bar_label(inputs)
	if (locale === "it") return it_content_radar_bar_label(inputs)
	if (locale === "nl") return nl_content_radar_bar_label(inputs)
	if (locale === "pl") return pl_content_radar_bar_label(inputs)
	if (locale === "pt") return pt_content_radar_bar_label(inputs)
	if (locale === "ru") return ru_content_radar_bar_label(inputs)
	if (locale === "sv") return sv_content_radar_bar_label(inputs)
	if (locale === "tr") return tr_content_radar_bar_label(inputs)
	if (locale === "zh") return zh_content_radar_bar_label(inputs)
	if (locale === "ja") return ja_content_radar_bar_label(inputs)
	return en_content_radar_bar_label(inputs)
});
