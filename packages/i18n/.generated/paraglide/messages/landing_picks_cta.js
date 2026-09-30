/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Landing_Picks_CtaInputs */

const en_landing_picks_cta = /** @type {(inputs: Landing_Picks_CtaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Browse all ${i?.count} mods`)
};

const es_landing_picks_cta = /** @type {(inputs: Landing_Picks_CtaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Explora los ${i?.count} mods`)
};

const de_landing_picks_cta = /** @type {(inputs: Landing_Picks_CtaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alle ${i?.count} Mods durchstöbern`)
};

const fr_landing_picks_cta = /** @type {(inputs: Landing_Picks_CtaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Parcourir les ${i?.count} mods`)
};

const it_landing_picks_cta = /** @type {(inputs: Landing_Picks_CtaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sfoglia tutte le ${i?.count} mod`)
};

const nl_landing_picks_cta = /** @type {(inputs: Landing_Picks_CtaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bekijk alle ${i?.count} mods`)
};

const pl_landing_picks_cta = /** @type {(inputs: Landing_Picks_CtaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przeglądaj wszystkie mody (${i?.count})`)
};

const pt_landing_picks_cta = /** @type {(inputs: Landing_Picks_CtaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Explore todos os ${i?.count} mods`)
};

const ru_landing_picks_cta = /** @type {(inputs: Landing_Picks_CtaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Все моды: ${i?.count}`)
};

const sv_landing_picks_cta = /** @type {(inputs: Landing_Picks_CtaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bläddra bland alla ${i?.count} moddar`)
};

const tr_landing_picks_cta = /** @type {(inputs: Landing_Picks_CtaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} modun tümüne göz at`)
};

const zh_landing_picks_cta = /** @type {(inputs: Landing_Picks_CtaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`浏览全部 ${i?.count} 个模组`)
};

const ja_landing_picks_cta = /** @type {(inputs: Landing_Picks_CtaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}件のMODをすべて見る`)
};

/**
* | output |
* | --- |
* | "Browse all {count} mods" |
*
* @param {Landing_Picks_CtaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_picks_cta = /** @type {((inputs: Landing_Picks_CtaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Picks_CtaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_picks_cta(inputs)
	if (locale === "de") return de_landing_picks_cta(inputs)
	if (locale === "fr") return fr_landing_picks_cta(inputs)
	if (locale === "it") return it_landing_picks_cta(inputs)
	if (locale === "nl") return nl_landing_picks_cta(inputs)
	if (locale === "pl") return pl_landing_picks_cta(inputs)
	if (locale === "pt") return pt_landing_picks_cta(inputs)
	if (locale === "ru") return ru_landing_picks_cta(inputs)
	if (locale === "sv") return sv_landing_picks_cta(inputs)
	if (locale === "tr") return tr_landing_picks_cta(inputs)
	if (locale === "zh") return zh_landing_picks_cta(inputs)
	if (locale === "ja") return ja_landing_picks_cta(inputs)
	return en_landing_picks_cta(inputs)
});
