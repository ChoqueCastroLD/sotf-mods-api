/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ works: NonNullable<unknown>, partial: NonNullable<unknown>, broken: NonNullable<unknown> }} Content_Radar_CountsInputs */

const en_content_radar_counts = /** @type {(inputs: Content_Radar_CountsInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("en", i?.works, {});
	const partial__number = registry.number("en", i?.partial, {});
	const broken__number = registry.number("en", i?.broken, {});return /** @type {LocalizedString} */ (`${works__number} works · ${partial__number} partial · ${broken__number} broken`)
};

const es_content_radar_counts = /** @type {(inputs: Content_Radar_CountsInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("es", i?.works, {});
	const partial__number = registry.number("es", i?.partial, {});
	const broken__number = registry.number("es", i?.broken, {});return /** @type {LocalizedString} */ (`${works__number} funciona · ${partial__number} parcial · ${broken__number} roto`)
};

const de_content_radar_counts = /** @type {(inputs: Content_Radar_CountsInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("de", i?.works, {});
	const partial__number = registry.number("de", i?.partial, {});
	const broken__number = registry.number("de", i?.broken, {});return /** @type {LocalizedString} */ (`${works__number} funktioniert · ${partial__number} teilweise · ${broken__number} kaputt`)
};

const fr_content_radar_counts = /** @type {(inputs: Content_Radar_CountsInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("fr", i?.works, {});
	const partial__number = registry.number("fr", i?.partial, {});
	const broken__number = registry.number("fr", i?.broken, {});return /** @type {LocalizedString} */ (`${works__number} fonctionne · ${partial__number} partiel · ${broken__number} cassé`)
};

const it_content_radar_counts = /** @type {(inputs: Content_Radar_CountsInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("it", i?.works, {});
	const partial__number = registry.number("it", i?.partial, {});
	const broken__number = registry.number("it", i?.broken, {});return /** @type {LocalizedString} */ (`${works__number} funziona · ${partial__number} parziale · ${broken__number} rotta`)
};

const nl_content_radar_counts = /** @type {(inputs: Content_Radar_CountsInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("nl", i?.works, {});
	const partial__number = registry.number("nl", i?.partial, {});
	const broken__number = registry.number("nl", i?.broken, {});return /** @type {LocalizedString} */ (`${works__number} werkt · ${partial__number} deels · ${broken__number} kapot`)
};

const pl_content_radar_counts = /** @type {(inputs: Content_Radar_CountsInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("pl", i?.works, {});
	const partial__number = registry.number("pl", i?.partial, {});
	const broken__number = registry.number("pl", i?.broken, {});return /** @type {LocalizedString} */ (`działa: ${works__number} · częściowo: ${partial__number} · zepsuty: ${broken__number}`)
};

const pt_content_radar_counts = /** @type {(inputs: Content_Radar_CountsInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("pt", i?.works, {});
	const partial__number = registry.number("pt", i?.partial, {});
	const broken__number = registry.number("pt", i?.broken, {});return /** @type {LocalizedString} */ (`${works__number} funciona · ${partial__number} parcial · ${broken__number} quebrado`)
};

const ru_content_radar_counts = /** @type {(inputs: Content_Radar_CountsInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("ru", i?.works, {});
	const partial__number = registry.number("ru", i?.partial, {});
	const broken__number = registry.number("ru", i?.broken, {});return /** @type {LocalizedString} */ (`работает: ${works__number} · частично: ${partial__number} · сломан: ${broken__number}`)
};

const sv_content_radar_counts = /** @type {(inputs: Content_Radar_CountsInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("sv", i?.works, {});
	const partial__number = registry.number("sv", i?.partial, {});
	const broken__number = registry.number("sv", i?.broken, {});return /** @type {LocalizedString} */ (`${works__number} fungerar · ${partial__number} delvis · ${broken__number} trasig`)
};

const tr_content_radar_counts = /** @type {(inputs: Content_Radar_CountsInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("tr", i?.works, {});
	const partial__number = registry.number("tr", i?.partial, {});
	const broken__number = registry.number("tr", i?.broken, {});return /** @type {LocalizedString} */ (`${works__number} çalışıyor · ${partial__number} kısmen · ${broken__number} bozuk`)
};

const zh_content_radar_counts = /** @type {(inputs: Content_Radar_CountsInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("zh", i?.works, {});
	const partial__number = registry.number("zh", i?.partial, {});
	const broken__number = registry.number("zh", i?.broken, {});return /** @type {LocalizedString} */ (`可用 ${works__number} · 部分 ${partial__number} · 失效 ${broken__number}`)
};

const ja_content_radar_counts = /** @type {(inputs: Content_Radar_CountsInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("ja", i?.works, {});
	const partial__number = registry.number("ja", i?.partial, {});
	const broken__number = registry.number("ja", i?.broken, {});return /** @type {LocalizedString} */ (`動作 ${works__number} · 一部 ${partial__number} · 不具合 ${broken__number}`)
};

/**
* | output |
* | --- |
* | "{works__number} works · {partial__number} partial · {broken__number} broken" |
*
* @param {Content_Radar_CountsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_counts = /** @type {((inputs: Content_Radar_CountsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_CountsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_counts(inputs)
	if (locale === "de") return de_content_radar_counts(inputs)
	if (locale === "fr") return fr_content_radar_counts(inputs)
	if (locale === "it") return it_content_radar_counts(inputs)
	if (locale === "nl") return nl_content_radar_counts(inputs)
	if (locale === "pl") return pl_content_radar_counts(inputs)
	if (locale === "pt") return pt_content_radar_counts(inputs)
	if (locale === "ru") return ru_content_radar_counts(inputs)
	if (locale === "sv") return sv_content_radar_counts(inputs)
	if (locale === "tr") return tr_content_radar_counts(inputs)
	if (locale === "zh") return zh_content_radar_counts(inputs)
	if (locale === "ja") return ja_content_radar_counts(inputs)
	return en_content_radar_counts(inputs)
});
