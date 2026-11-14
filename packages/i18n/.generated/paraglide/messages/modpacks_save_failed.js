/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Save_FailedInputs */

const en_modpacks_save_failed = /** @type {(inputs: Modpacks_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't save the modpack`)
};

const es_modpacks_save_failed = /** @type {(inputs: Modpacks_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo guardar el modpack`)
};

const de_modpacks_save_failed = /** @type {(inputs: Modpacks_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack konnte nicht gespeichert werden`)
};

const fr_modpacks_save_failed = /** @type {(inputs: Modpacks_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’enregistrer le modpack`)
};

const it_modpacks_save_failed = /** @type {(inputs: Modpacks_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile salvare il modpack`)
};

const nl_modpacks_save_failed = /** @type {(inputs: Modpacks_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan de modpack niet opslaan`)
};

const pl_modpacks_save_failed = /** @type {(inputs: Modpacks_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać modpacka`)
};

const pt_modpacks_save_failed = /** @type {(inputs: Modpacks_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar o modpack`)
};

const ru_modpacks_save_failed = /** @type {(inputs: Modpacks_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить модпак`)
};

const sv_modpacks_save_failed = /** @type {(inputs: Modpacks_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att spara modpaketet`)
};

const tr_modpacks_save_failed = /** @type {(inputs: Modpacks_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketi kaydedilemedi`)
};

const zh_modpacks_save_failed = /** @type {(inputs: Modpacks_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存整合包`)
};

const ja_modpacks_save_failed = /** @type {(inputs: Modpacks_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックを保存できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't save the modpack" |
*
* @param {Modpacks_Save_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_save_failed = /** @type {((inputs?: Modpacks_Save_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Save_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_save_failed(inputs)
	if (locale === "de") return de_modpacks_save_failed(inputs)
	if (locale === "fr") return fr_modpacks_save_failed(inputs)
	if (locale === "it") return it_modpacks_save_failed(inputs)
	if (locale === "nl") return nl_modpacks_save_failed(inputs)
	if (locale === "pl") return pl_modpacks_save_failed(inputs)
	if (locale === "pt") return pt_modpacks_save_failed(inputs)
	if (locale === "ru") return ru_modpacks_save_failed(inputs)
	if (locale === "sv") return sv_modpacks_save_failed(inputs)
	if (locale === "tr") return tr_modpacks_save_failed(inputs)
	if (locale === "zh") return zh_modpacks_save_failed(inputs)
	if (locale === "ja") return ja_modpacks_save_failed(inputs)
	return en_modpacks_save_failed(inputs)
});
