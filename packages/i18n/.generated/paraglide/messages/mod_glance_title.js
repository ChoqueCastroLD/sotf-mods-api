/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Glance_TitleInputs */

const en_mod_glance_title = /** @type {(inputs: Mod_Glance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`At a glance`)
};

const es_mod_glance_title = /** @type {(inputs: Mod_Glance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De un vistazo`)
};

const de_mod_glance_title = /** @type {(inputs: Mod_Glance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auf einen Blick`)
};

const fr_mod_glance_title = /** @type {(inputs: Mod_Glance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En bref`)
};

const it_mod_glance_title = /** @type {(inputs: Mod_Glance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In breve`)
};

const nl_mod_glance_title = /** @type {(inputs: Mod_Glance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In één oogopslag`)
};

const pl_mod_glance_title = /** @type {(inputs: Mod_Glance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W skrócie`)
};

const pt_mod_glance_title = /** @type {(inputs: Mod_Glance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resumo rápido`)
};

const ru_mod_glance_title = /** @type {(inputs: Mod_Glance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кратко`)
};

const sv_mod_glance_title = /** @type {(inputs: Mod_Glance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I korthet`)
};

const tr_mod_glance_title = /** @type {(inputs: Mod_Glance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir bakışta`)
};

const zh_mod_glance_title = /** @type {(inputs: Mod_Glance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`速览`)
};

const ja_mod_glance_title = /** @type {(inputs: Mod_Glance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ひと目でわかる`)
};

/**
* | output |
* | --- |
* | "At a glance" |
*
* @param {Mod_Glance_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_glance_title = /** @type {((inputs?: Mod_Glance_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Glance_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_glance_title(inputs)
	if (locale === "de") return de_mod_glance_title(inputs)
	if (locale === "fr") return fr_mod_glance_title(inputs)
	if (locale === "it") return it_mod_glance_title(inputs)
	if (locale === "nl") return nl_mod_glance_title(inputs)
	if (locale === "pl") return pl_mod_glance_title(inputs)
	if (locale === "pt") return pt_mod_glance_title(inputs)
	if (locale === "ru") return ru_mod_glance_title(inputs)
	if (locale === "sv") return sv_mod_glance_title(inputs)
	if (locale === "tr") return tr_mod_glance_title(inputs)
	if (locale === "zh") return zh_mod_glance_title(inputs)
	if (locale === "ja") return ja_mod_glance_title(inputs)
	return en_mod_glance_title(inputs)
});
