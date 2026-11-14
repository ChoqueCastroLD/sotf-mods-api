/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_SavedInputs */

const en_modpacks_saved = /** @type {(inputs: Modpacks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack saved`)
};

const es_modpacks_saved = /** @type {(inputs: Modpacks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack guardado`)
};

const de_modpacks_saved = /** @type {(inputs: Modpacks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack gespeichert`)
};

const fr_modpacks_saved = /** @type {(inputs: Modpacks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack enregistré`)
};

const it_modpacks_saved = /** @type {(inputs: Modpacks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack salvato`)
};

const nl_modpacks_saved = /** @type {(inputs: Modpacks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack opgeslagen`)
};

const pl_modpacks_saved = /** @type {(inputs: Modpacks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano modpack`)
};

const pt_modpacks_saved = /** @type {(inputs: Modpacks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack salvo`)
};

const ru_modpacks_saved = /** @type {(inputs: Modpacks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модпак сохранён`)
};

const sv_modpacks_saved = /** @type {(inputs: Modpacks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpaketet sparades`)
};

const tr_modpacks_saved = /** @type {(inputs: Modpacks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketi kaydedildi`)
};

const zh_modpacks_saved = /** @type {(inputs: Modpacks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整合包已保存`)
};

const ja_modpacks_saved = /** @type {(inputs: Modpacks_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックを保存しました`)
};

/**
* | output |
* | --- |
* | "Modpack saved" |
*
* @param {Modpacks_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_saved = /** @type {((inputs?: Modpacks_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_saved(inputs)
	if (locale === "de") return de_modpacks_saved(inputs)
	if (locale === "fr") return fr_modpacks_saved(inputs)
	if (locale === "it") return it_modpacks_saved(inputs)
	if (locale === "nl") return nl_modpacks_saved(inputs)
	if (locale === "pl") return pl_modpacks_saved(inputs)
	if (locale === "pt") return pt_modpacks_saved(inputs)
	if (locale === "ru") return ru_modpacks_saved(inputs)
	if (locale === "sv") return sv_modpacks_saved(inputs)
	if (locale === "tr") return tr_modpacks_saved(inputs)
	if (locale === "zh") return zh_modpacks_saved(inputs)
	if (locale === "ja") return ja_modpacks_saved(inputs)
	return en_modpacks_saved(inputs)
});
