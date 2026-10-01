/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Cta_ViewInputs */

const en_jams_cta_view = /** @type {(inputs: Jams_Cta_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View the jam`)
};

const es_jams_cta_view = /** @type {(inputs: Jams_Cta_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver el jam`)
};

const de_jams_cta_view = /** @type {(inputs: Jams_Cta_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam ansehen`)
};

const fr_jams_cta_view = /** @type {(inputs: Jams_Cta_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir le jam`)
};

const it_jams_cta_view = /** @type {(inputs: Jams_Cta_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi il jam`)
};

const nl_jams_cta_view = /** @type {(inputs: Jams_Cta_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekijk de jam`)
};

const pl_jams_cta_view = /** @type {(inputs: Jams_Cta_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz jam`)
};

const pt_jams_cta_view = /** @type {(inputs: Jams_Cta_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver o jam`)
};

const ru_jams_cta_view = /** @type {(inputs: Jams_Cta_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть джем`)
};

const sv_jams_cta_view = /** @type {(inputs: Jams_Cta_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa jammen`)
};

const tr_jams_cta_view = /** @type {(inputs: Jams_Cta_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam'i gör`)
};

const zh_jams_cta_view = /** @type {(inputs: Jams_Cta_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看 Jam`)
};

const ja_jams_cta_view = /** @type {(inputs: Jams_Cta_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムを見る`)
};

/**
* | output |
* | --- |
* | "View the jam" |
*
* @param {Jams_Cta_ViewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_cta_view = /** @type {((inputs?: Jams_Cta_ViewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Cta_ViewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_cta_view(inputs)
	if (locale === "de") return de_jams_cta_view(inputs)
	if (locale === "fr") return fr_jams_cta_view(inputs)
	if (locale === "it") return it_jams_cta_view(inputs)
	if (locale === "nl") return nl_jams_cta_view(inputs)
	if (locale === "pl") return pl_jams_cta_view(inputs)
	if (locale === "pt") return pt_jams_cta_view(inputs)
	if (locale === "ru") return ru_jams_cta_view(inputs)
	if (locale === "sv") return sv_jams_cta_view(inputs)
	if (locale === "tr") return tr_jams_cta_view(inputs)
	if (locale === "zh") return zh_jams_cta_view(inputs)
	if (locale === "ja") return ja_jams_cta_view(inputs)
	return en_jams_cta_view(inputs)
});
