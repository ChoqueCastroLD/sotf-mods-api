/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_History_SwitchInputs */

const en_settings_history_switch = /** @type {(inputs: Settings_History_SwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep a download history`)
};

const es_settings_history_switch = /** @type {(inputs: Settings_History_SwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar el historial de descargas`)
};

const de_settings_history_switch = /** @type {(inputs: Settings_History_SwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download-Verlauf speichern`)
};

const fr_settings_history_switch = /** @type {(inputs: Settings_History_SwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conserver un historique des téléchargements`)
};

const it_settings_history_switch = /** @type {(inputs: Settings_History_SwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conserva la cronologia dei download`)
};

const nl_settings_history_switch = /** @type {(inputs: Settings_History_SwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloadgeschiedenis bijhouden`)
};

const pl_settings_history_switch = /** @type {(inputs: Settings_History_SwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisuj historię pobrań`)
};

const pt_settings_history_switch = /** @type {(inputs: Settings_History_SwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manter histórico de downloads`)
};

const ru_settings_history_switch = /** @type {(inputs: Settings_History_SwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вести историю загрузок`)
};

const sv_settings_history_switch = /** @type {(inputs: Settings_History_SwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara nedladdningshistorik`)
};

const tr_settings_history_switch = /** @type {(inputs: Settings_History_SwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme geçmişini tut`)
};

const zh_settings_history_switch = /** @type {(inputs: Settings_History_SwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保留下载记录`)
};

const ja_settings_history_switch = /** @type {(inputs: Settings_History_SwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード履歴を保存する`)
};

/**
* | output |
* | --- |
* | "Keep a download history" |
*
* @param {Settings_History_SwitchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_history_switch = /** @type {((inputs?: Settings_History_SwitchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_History_SwitchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_history_switch(inputs)
	if (locale === "de") return de_settings_history_switch(inputs)
	if (locale === "fr") return fr_settings_history_switch(inputs)
	if (locale === "it") return it_settings_history_switch(inputs)
	if (locale === "nl") return nl_settings_history_switch(inputs)
	if (locale === "pl") return pl_settings_history_switch(inputs)
	if (locale === "pt") return pt_settings_history_switch(inputs)
	if (locale === "ru") return ru_settings_history_switch(inputs)
	if (locale === "sv") return sv_settings_history_switch(inputs)
	if (locale === "tr") return tr_settings_history_switch(inputs)
	if (locale === "zh") return zh_settings_history_switch(inputs)
	if (locale === "ja") return ja_settings_history_switch(inputs)
	return en_settings_history_switch(inputs)
});
