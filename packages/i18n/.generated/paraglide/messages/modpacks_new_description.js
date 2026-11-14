/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_New_DescriptionInputs */

const en_modpacks_new_description = /** @type {(inputs: Modpacks_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick the mods, put them in order and describe what the modpack is for.`)
};

const es_modpacks_new_description = /** @type {(inputs: Modpacks_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige los mods, ordénalos y describe para qué sirve el modpack.`)
};

const de_modpacks_new_description = /** @type {(inputs: Modpacks_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle die Mods, bringe sie in eine Reihenfolge und beschreibe, wofür das Modpack gedacht ist.`)
};

const fr_modpacks_new_description = /** @type {(inputs: Modpacks_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez les mods, mettez-les dans l’ordre et décrivez à quoi sert le modpack.`)
};

const it_modpacks_new_description = /** @type {(inputs: Modpacks_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli le mod, mettile in ordine e descrivi a cosa serve il modpack.`)
};

const nl_modpacks_new_description = /** @type {(inputs: Modpacks_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies de mods, zet ze op volgorde en beschrijf waarvoor de modpack bedoeld is.`)
};

const pl_modpacks_new_description = /** @type {(inputs: Modpacks_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz mody, ustaw ich kolejność i opisz, do czego służy modpack.`)
};

const pt_modpacks_new_description = /** @type {(inputs: Modpacks_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha os mods, coloque-os em ordem e descreva para que serve o modpack.`)
};

const ru_modpacks_new_description = /** @type {(inputs: Modpacks_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите моды, расставьте их по порядку и опишите, для чего этот модпак.`)
};

const sv_modpacks_new_description = /** @type {(inputs: Modpacks_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj moddarna, sätt dem i ordning och beskriv vad modpaketet är till för.`)
};

const tr_modpacks_new_description = /** @type {(inputs: Modpacks_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları seç, sırala ve mod paketinin ne için olduğunu anlat.`)
};

const zh_modpacks_new_description = /** @type {(inputs: Modpacks_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择模组，排好顺序，并说明这个整合包的用途。`)
};

const ja_modpacks_new_description = /** @type {(inputs: Modpacks_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod を選んで並べ、Modパックの用途を説明してください。`)
};

/**
* | output |
* | --- |
* | "Pick the mods, put them in order and describe what the modpack is for." |
*
* @param {Modpacks_New_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_new_description = /** @type {((inputs?: Modpacks_New_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_New_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_new_description(inputs)
	if (locale === "de") return de_modpacks_new_description(inputs)
	if (locale === "fr") return fr_modpacks_new_description(inputs)
	if (locale === "it") return it_modpacks_new_description(inputs)
	if (locale === "nl") return nl_modpacks_new_description(inputs)
	if (locale === "pl") return pl_modpacks_new_description(inputs)
	if (locale === "pt") return pt_modpacks_new_description(inputs)
	if (locale === "ru") return ru_modpacks_new_description(inputs)
	if (locale === "sv") return sv_modpacks_new_description(inputs)
	if (locale === "tr") return tr_modpacks_new_description(inputs)
	if (locale === "zh") return zh_modpacks_new_description(inputs)
	if (locale === "ja") return ja_modpacks_new_description(inputs)
	return en_modpacks_new_description(inputs)
});
