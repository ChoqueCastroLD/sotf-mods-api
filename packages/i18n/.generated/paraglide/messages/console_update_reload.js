/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Update_ReloadInputs */

const en_console_update_reload = /** @type {(inputs: Console_Update_ReloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reload`)
};

const es_console_update_reload = /** @type {(inputs: Console_Update_ReloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recargar`)
};

const de_console_update_reload = /** @type {(inputs: Console_Update_ReloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neu laden`)
};

const fr_console_update_reload = /** @type {(inputs: Console_Update_ReloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recharger`)
};

const it_console_update_reload = /** @type {(inputs: Console_Update_ReloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricarica`)
};

const nl_console_update_reload = /** @type {(inputs: Console_Update_ReloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herladen`)
};

const pl_console_update_reload = /** @type {(inputs: Console_Update_ReloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odśwież`)
};

const pt_console_update_reload = /** @type {(inputs: Console_Update_ReloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recarregar`)
};

const ru_console_update_reload = /** @type {(inputs: Console_Update_ReloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перезагрузить`)
};

const sv_console_update_reload = /** @type {(inputs: Console_Update_ReloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda om`)
};

const tr_console_update_reload = /** @type {(inputs: Console_Update_ReloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeniden yükle`)
};

const zh_console_update_reload = /** @type {(inputs: Console_Update_ReloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新加载`)
};

const ja_console_update_reload = /** @type {(inputs: Console_Update_ReloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再読み込み`)
};

/**
* | output |
* | --- |
* | "Reload" |
*
* @param {Console_Update_ReloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_update_reload = /** @type {((inputs?: Console_Update_ReloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Update_ReloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_update_reload(inputs)
	if (locale === "de") return de_console_update_reload(inputs)
	if (locale === "fr") return fr_console_update_reload(inputs)
	if (locale === "it") return it_console_update_reload(inputs)
	if (locale === "nl") return nl_console_update_reload(inputs)
	if (locale === "pl") return pl_console_update_reload(inputs)
	if (locale === "pt") return pt_console_update_reload(inputs)
	if (locale === "ru") return ru_console_update_reload(inputs)
	if (locale === "sv") return sv_console_update_reload(inputs)
	if (locale === "tr") return tr_console_update_reload(inputs)
	if (locale === "zh") return zh_console_update_reload(inputs)
	if (locale === "ja") return ja_console_update_reload(inputs)
	return en_console_update_reload(inputs)
});
