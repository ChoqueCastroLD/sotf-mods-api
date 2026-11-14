/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Review_ShowInputs */

const en_modpacks_review_show = /** @type {(inputs: Modpacks_Review_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show mods`)
};

const es_modpacks_review_show = /** @type {(inputs: Modpacks_Review_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver mods`)
};

const de_modpacks_review_show = /** @type {(inputs: Modpacks_Review_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods anzeigen`)
};

const fr_modpacks_review_show = /** @type {(inputs: Modpacks_Review_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir les mods`)
};

const it_modpacks_review_show = /** @type {(inputs: Modpacks_Review_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra mod`)
};

const nl_modpacks_review_show = /** @type {(inputs: Modpacks_Review_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods tonen`)
};

const pl_modpacks_review_show = /** @type {(inputs: Modpacks_Review_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż mody`)
};

const pt_modpacks_review_show = /** @type {(inputs: Modpacks_Review_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar mods`)
};

const ru_modpacks_review_show = /** @type {(inputs: Modpacks_Review_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать моды`)
};

const sv_modpacks_review_show = /** @type {(inputs: Modpacks_Review_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa moddar`)
};

const tr_modpacks_review_show = /** @type {(inputs: Modpacks_Review_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları göster`)
};

const zh_modpacks_review_show = /** @type {(inputs: Modpacks_Review_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示模组`)
};

const ja_modpacks_review_show = /** @type {(inputs: Modpacks_Review_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod を表示`)
};

/**
* | output |
* | --- |
* | "Show mods" |
*
* @param {Modpacks_Review_ShowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_show = /** @type {((inputs?: Modpacks_Review_ShowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_ShowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_show(inputs)
	if (locale === "de") return de_modpacks_review_show(inputs)
	if (locale === "fr") return fr_modpacks_review_show(inputs)
	if (locale === "it") return it_modpacks_review_show(inputs)
	if (locale === "nl") return nl_modpacks_review_show(inputs)
	if (locale === "pl") return pl_modpacks_review_show(inputs)
	if (locale === "pt") return pt_modpacks_review_show(inputs)
	if (locale === "ru") return ru_modpacks_review_show(inputs)
	if (locale === "sv") return sv_modpacks_review_show(inputs)
	if (locale === "tr") return tr_modpacks_review_show(inputs)
	if (locale === "zh") return zh_modpacks_review_show(inputs)
	if (locale === "ja") return ja_modpacks_review_show(inputs)
	return en_modpacks_review_show(inputs)
});
