/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Offline_SavedInputs */

const en_shell_offline_saved = /** @type {(inputs: Shell_Offline_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saved on this device`)
};

const es_shell_offline_saved = /** @type {(inputs: Shell_Offline_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardada en este dispositivo`)
};

const de_shell_offline_saved = /** @type {(inputs: Shell_Offline_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auf diesem Gerät gespeichert`)
};

const fr_shell_offline_saved = /** @type {(inputs: Shell_Offline_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistré sur cet appareil`)
};

const it_shell_offline_saved = /** @type {(inputs: Shell_Offline_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvata su questo dispositivo`)
};

const nl_shell_offline_saved = /** @type {(inputs: Shell_Offline_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opgeslagen op dit apparaat`)
};

const pl_shell_offline_saved = /** @type {(inputs: Shell_Offline_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano na tym urządzeniu`)
};

const pt_shell_offline_saved = /** @type {(inputs: Shell_Offline_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvo neste dispositivo`)
};

const ru_shell_offline_saved = /** @type {(inputs: Shell_Offline_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранено на этом устройстве`)
};

const sv_shell_offline_saved = /** @type {(inputs: Shell_Offline_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sparad på den här enheten`)
};

const tr_shell_offline_saved = /** @type {(inputs: Shell_Offline_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu cihazda kayıtlı`)
};

const zh_shell_offline_saved = /** @type {(inputs: Shell_Offline_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已保存在此设备上`)
};

const ja_shell_offline_saved = /** @type {(inputs: Shell_Offline_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この端末に保存済み`)
};

/**
* | output |
* | --- |
* | "Saved on this device" |
*
* @param {Shell_Offline_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_offline_saved = /** @type {((inputs?: Shell_Offline_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Offline_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_offline_saved(inputs)
	if (locale === "de") return de_shell_offline_saved(inputs)
	if (locale === "fr") return fr_shell_offline_saved(inputs)
	if (locale === "it") return it_shell_offline_saved(inputs)
	if (locale === "nl") return nl_shell_offline_saved(inputs)
	if (locale === "pl") return pl_shell_offline_saved(inputs)
	if (locale === "pt") return pt_shell_offline_saved(inputs)
	if (locale === "ru") return ru_shell_offline_saved(inputs)
	if (locale === "sv") return sv_shell_offline_saved(inputs)
	if (locale === "tr") return tr_shell_offline_saved(inputs)
	if (locale === "zh") return zh_shell_offline_saved(inputs)
	if (locale === "ja") return ja_shell_offline_saved(inputs)
	return en_shell_offline_saved(inputs)
});
