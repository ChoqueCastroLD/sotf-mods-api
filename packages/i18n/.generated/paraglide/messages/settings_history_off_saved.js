/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_History_Off_SavedInputs */

const en_settings_history_off_saved = /** @type {(inputs: Settings_History_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download history turned off`)
};

const es_settings_history_off_saved = /** @type {(inputs: Settings_History_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historial de descargas desactivado`)
};

const de_settings_history_off_saved = /** @type {(inputs: Settings_History_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download-Verlauf ausgeschaltet`)
};

const fr_settings_history_off_saved = /** @type {(inputs: Settings_History_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historique des téléchargements désactivé`)
};

const it_settings_history_off_saved = /** @type {(inputs: Settings_History_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cronologia dei download disattivata`)
};

const nl_settings_history_off_saved = /** @type {(inputs: Settings_History_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloadgeschiedenis uitgeschakeld`)
};

const pl_settings_history_off_saved = /** @type {(inputs: Settings_History_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historia pobrań wyłączona`)
};

const pt_settings_history_off_saved = /** @type {(inputs: Settings_History_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Histórico de downloads desativado`)
};

const ru_settings_history_off_saved = /** @type {(inputs: Settings_History_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`История загрузок выключена`)
};

const sv_settings_history_off_saved = /** @type {(inputs: Settings_History_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningshistoriken är av`)
};

const tr_settings_history_off_saved = /** @type {(inputs: Settings_History_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme geçmişi kapatıldı`)
};

const zh_settings_history_off_saved = /** @type {(inputs: Settings_History_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载记录已关闭`)
};

const ja_settings_history_off_saved = /** @type {(inputs: Settings_History_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード履歴をオフにしました`)
};

/**
* | output |
* | --- |
* | "Download history turned off" |
*
* @param {Settings_History_Off_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_history_off_saved = /** @type {((inputs?: Settings_History_Off_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_History_Off_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_history_off_saved(inputs)
	if (locale === "de") return de_settings_history_off_saved(inputs)
	if (locale === "fr") return fr_settings_history_off_saved(inputs)
	if (locale === "it") return it_settings_history_off_saved(inputs)
	if (locale === "nl") return nl_settings_history_off_saved(inputs)
	if (locale === "pl") return pl_settings_history_off_saved(inputs)
	if (locale === "pt") return pt_settings_history_off_saved(inputs)
	if (locale === "ru") return ru_settings_history_off_saved(inputs)
	if (locale === "sv") return sv_settings_history_off_saved(inputs)
	if (locale === "tr") return tr_settings_history_off_saved(inputs)
	if (locale === "zh") return zh_settings_history_off_saved(inputs)
	if (locale === "ja") return ja_settings_history_off_saved(inputs)
	return en_settings_history_off_saved(inputs)
});
