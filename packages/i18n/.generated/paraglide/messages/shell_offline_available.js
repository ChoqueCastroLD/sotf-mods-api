/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Offline_AvailableInputs */

const en_shell_offline_available = /** @type {(inputs: Shell_Offline_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Still works offline`)
};

const es_shell_offline_available = /** @type {(inputs: Shell_Offline_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona sin conexión`)
};

const de_shell_offline_available = /** @type {(inputs: Shell_Offline_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funktioniert offline`)
};

const fr_shell_offline_available = /** @type {(inputs: Shell_Offline_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponible hors ligne`)
};

const it_shell_offline_available = /** @type {(inputs: Shell_Offline_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponibile offline`)
};

const nl_shell_offline_available = /** @type {(inputs: Shell_Offline_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt offline`)
};

const pl_shell_offline_available = /** @type {(inputs: Shell_Offline_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa offline`)
};

const pt_shell_offline_available = /** @type {(inputs: Shell_Offline_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponível off-line`)
};

const ru_shell_offline_available = /** @type {(inputs: Shell_Offline_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Доступно офлайн`)
};

const sv_shell_offline_available = /** @type {(inputs: Shell_Offline_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar offline`)
};

const tr_shell_offline_available = /** @type {(inputs: Shell_Offline_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çevrimdışı da çalışır`)
};

const zh_shell_offline_available = /** @type {(inputs: Shell_Offline_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`离线可用`)
};

const ja_shell_offline_available = /** @type {(inputs: Shell_Offline_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オフラインで利用可能`)
};

/**
* | output |
* | --- |
* | "Still works offline" |
*
* @param {Shell_Offline_AvailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_offline_available = /** @type {((inputs?: Shell_Offline_AvailableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Offline_AvailableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_offline_available(inputs)
	if (locale === "de") return de_shell_offline_available(inputs)
	if (locale === "fr") return fr_shell_offline_available(inputs)
	if (locale === "it") return it_shell_offline_available(inputs)
	if (locale === "nl") return nl_shell_offline_available(inputs)
	if (locale === "pl") return pl_shell_offline_available(inputs)
	if (locale === "pt") return pt_shell_offline_available(inputs)
	if (locale === "ru") return ru_shell_offline_available(inputs)
	if (locale === "sv") return sv_shell_offline_available(inputs)
	if (locale === "tr") return tr_shell_offline_available(inputs)
	if (locale === "zh") return zh_shell_offline_available(inputs)
	if (locale === "ja") return ja_shell_offline_available(inputs)
	return en_shell_offline_available(inputs)
});
