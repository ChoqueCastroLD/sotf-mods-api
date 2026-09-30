/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ open: NonNullable<unknown>, perDay: NonNullable<unknown> }} Requests_LimitsInputs */

const en_requests_limits = /** @type {(inputs: Requests_LimitsInputs) => LocalizedString} */ (i) => {
	const open__number = registry.number("en", i?.open, {});
	const perDay__number = registry.number("en", i?.perDay, {});return /** @type {LocalizedString} */ (`You can have up to ${open__number} open requests and post ${perDay__number} per day.`)
};

const es_requests_limits = /** @type {(inputs: Requests_LimitsInputs) => LocalizedString} */ (i) => {
	const open__number = registry.number("es", i?.open, {});
	const perDay__number = registry.number("es", i?.perDay, {});return /** @type {LocalizedString} */ (`Puedes tener hasta ${open__number} peticiones abiertas y publicar ${perDay__number} al día.`)
};

const de_requests_limits = /** @type {(inputs: Requests_LimitsInputs) => LocalizedString} */ (i) => {
	const open__number = registry.number("de", i?.open, {});
	const perDay__number = registry.number("de", i?.perDay, {});return /** @type {LocalizedString} */ (`Du kannst bis zu ${open__number} offene Wünsche haben und ${perDay__number} pro Tag einstellen.`)
};

const fr_requests_limits = /** @type {(inputs: Requests_LimitsInputs) => LocalizedString} */ (i) => {
	const open__number = registry.number("fr", i?.open, {});
	const perDay__number = registry.number("fr", i?.perDay, {});return /** @type {LocalizedString} */ (`Vous pouvez avoir jusqu’à ${open__number} demandes ouvertes et en publier ${perDay__number} par jour.`)
};

const it_requests_limits = /** @type {(inputs: Requests_LimitsInputs) => LocalizedString} */ (i) => {
	const open__number = registry.number("it", i?.open, {});
	const perDay__number = registry.number("it", i?.perDay, {});return /** @type {LocalizedString} */ (`Puoi avere fino a ${open__number} richieste aperte e pubblicarne ${perDay__number} al giorno.`)
};

const nl_requests_limits = /** @type {(inputs: Requests_LimitsInputs) => LocalizedString} */ (i) => {
	const open__number = registry.number("nl", i?.open, {});
	const perDay__number = registry.number("nl", i?.perDay, {});return /** @type {LocalizedString} */ (`Je mag maximaal ${open__number} open verzoeken hebben en ${perDay__number} per dag plaatsen.`)
};

const pl_requests_limits = /** @type {(inputs: Requests_LimitsInputs) => LocalizedString} */ (i) => {
	const open__number = registry.number("pl", i?.open, {});
	const perDay__number = registry.number("pl", i?.perDay, {});return /** @type {LocalizedString} */ (`Możesz mieć do ${open__number} otwartych próśb i dodawać ${perDay__number} dziennie.`)
};

const pt_requests_limits = /** @type {(inputs: Requests_LimitsInputs) => LocalizedString} */ (i) => {
	const open__number = registry.number("pt", i?.open, {});
	const perDay__number = registry.number("pt", i?.perDay, {});return /** @type {LocalizedString} */ (`Você pode ter até ${open__number} pedidos abertos e publicar ${perDay__number} por dia.`)
};

const ru_requests_limits = /** @type {(inputs: Requests_LimitsInputs) => LocalizedString} */ (i) => {
	const open__number = registry.number("ru", i?.open, {});
	const perDay__number = registry.number("ru", i?.perDay, {});return /** @type {LocalizedString} */ (`Можно иметь до ${open__number} открытых запросов и публиковать ${perDay__number} в день.`)
};

const sv_requests_limits = /** @type {(inputs: Requests_LimitsInputs) => LocalizedString} */ (i) => {
	const open__number = registry.number("sv", i?.open, {});
	const perDay__number = registry.number("sv", i?.perDay, {});return /** @type {LocalizedString} */ (`Du kan ha upp till ${open__number} öppna önskemål och lägga upp ${perDay__number} per dag.`)
};

const tr_requests_limits = /** @type {(inputs: Requests_LimitsInputs) => LocalizedString} */ (i) => {
	const open__number = registry.number("tr", i?.open, {});
	const perDay__number = registry.number("tr", i?.perDay, {});return /** @type {LocalizedString} */ (`En fazla ${open__number} açık isteğiniz olabilir ve günde ${perDay__number} istek yayımlayabilirsiniz.`)
};

const zh_requests_limits = /** @type {(inputs: Requests_LimitsInputs) => LocalizedString} */ (i) => {
	const open__number = registry.number("zh", i?.open, {});
	const perDay__number = registry.number("zh", i?.perDay, {});return /** @type {LocalizedString} */ (`最多可同时有 ${open__number} 个开放请求，每天最多发布 ${perDay__number} 个。`)
};

const ja_requests_limits = /** @type {(inputs: Requests_LimitsInputs) => LocalizedString} */ (i) => {
	const open__number = registry.number("ja", i?.open, {});
	const perDay__number = registry.number("ja", i?.perDay, {});return /** @type {LocalizedString} */ (`公開中のリクエストは最大 ${open__number} 件、投稿は 1 日 ${perDay__number} 件までです。`)
};

/**
* | output |
* | --- |
* | "You can have up to {open__number} open requests and post {perDay__number} per day." |
*
* @param {Requests_LimitsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_limits = /** @type {((inputs: Requests_LimitsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_LimitsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_limits(inputs)
	if (locale === "de") return de_requests_limits(inputs)
	if (locale === "fr") return fr_requests_limits(inputs)
	if (locale === "it") return it_requests_limits(inputs)
	if (locale === "nl") return nl_requests_limits(inputs)
	if (locale === "pl") return pl_requests_limits(inputs)
	if (locale === "pt") return pt_requests_limits(inputs)
	if (locale === "ru") return ru_requests_limits(inputs)
	if (locale === "sv") return sv_requests_limits(inputs)
	if (locale === "tr") return tr_requests_limits(inputs)
	if (locale === "zh") return zh_requests_limits(inputs)
	if (locale === "ja") return ja_requests_limits(inputs)
	return en_requests_limits(inputs)
});
