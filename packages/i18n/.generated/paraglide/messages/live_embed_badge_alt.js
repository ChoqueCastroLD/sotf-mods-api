/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ kind: NonNullable<unknown>, name: NonNullable<unknown> }} Live_Embed_Badge_AltInputs */

const en_live_embed_badge_alt = /** @type {(inputs: Live_Embed_Badge_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind} badge: ${i?.name}`)
};

const es_live_embed_badge_alt = /** @type {(inputs: Live_Embed_Badge_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Insignia de ${i?.kind}: ${i?.name}`)
};

const de_live_embed_badge_alt = /** @type {(inputs: Live_Embed_Badge_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}-Badge: ${i?.name}`)
};

const fr_live_embed_badge_alt = /** @type {(inputs: Live_Embed_Badge_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Badge ${i?.kind} : ${i?.name}`)
};

const it_live_embed_badge_alt = /** @type {(inputs: Live_Embed_Badge_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Badge ${i?.kind}: ${i?.name}`)
};

const nl_live_embed_badge_alt = /** @type {(inputs: Live_Embed_Badge_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}-badge: ${i?.name}`)
};

const pl_live_embed_badge_alt = /** @type {(inputs: Live_Embed_Badge_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odznaka „${i?.kind}”: ${i?.name}`)
};

const pt_live_embed_badge_alt = /** @type {(inputs: Live_Embed_Badge_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Emblema de ${i?.kind}: ${i?.name}`)
};

const ru_live_embed_badge_alt = /** @type {(inputs: Live_Embed_Badge_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Значок «${i?.kind}»: ${i?.name}`)
};

const sv_live_embed_badge_alt = /** @type {(inputs: Live_Embed_Badge_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}-märke: ${i?.name}`)
};

const tr_live_embed_badge_alt = /** @type {(inputs: Live_Embed_Badge_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind} rozeti: ${i?.name}`)
};

const zh_live_embed_badge_alt = /** @type {(inputs: Live_Embed_Badge_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}徽章：${i?.name}`)
};

const ja_live_embed_badge_alt = /** @type {(inputs: Live_Embed_Badge_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kind}バッジ: ${i?.name}`)
};

/**
* | output |
* | --- |
* | "{kind} badge: {name}" |
*
* @param {Live_Embed_Badge_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const live_embed_badge_alt = /** @type {((inputs: Live_Embed_Badge_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Live_Embed_Badge_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_live_embed_badge_alt(inputs)
	if (locale === "de") return de_live_embed_badge_alt(inputs)
	if (locale === "fr") return fr_live_embed_badge_alt(inputs)
	if (locale === "it") return it_live_embed_badge_alt(inputs)
	if (locale === "nl") return nl_live_embed_badge_alt(inputs)
	if (locale === "pl") return pl_live_embed_badge_alt(inputs)
	if (locale === "pt") return pt_live_embed_badge_alt(inputs)
	if (locale === "ru") return ru_live_embed_badge_alt(inputs)
	if (locale === "sv") return sv_live_embed_badge_alt(inputs)
	if (locale === "tr") return tr_live_embed_badge_alt(inputs)
	if (locale === "zh") return zh_live_embed_badge_alt(inputs)
	if (locale === "ja") return ja_live_embed_badge_alt(inputs)
	return en_live_embed_badge_alt(inputs)
});
