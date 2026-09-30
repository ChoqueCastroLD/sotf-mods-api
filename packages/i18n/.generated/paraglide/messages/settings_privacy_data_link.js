/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Privacy_Data_LinkInputs */

const en_settings_privacy_data_link = /** @type {(inputs: Settings_Privacy_Data_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Export or delete my data`)
};

const es_settings_privacy_data_link = /** @type {(inputs: Settings_Privacy_Data_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportar o borrar mis datos`)
};

const de_settings_privacy_data_link = /** @type {(inputs: Settings_Privacy_Data_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine Daten exportieren oder löschen`)
};

const fr_settings_privacy_data_link = /** @type {(inputs: Settings_Privacy_Data_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exporter ou supprimer mes données`)
};

const it_settings_privacy_data_link = /** @type {(inputs: Settings_Privacy_Data_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esporta o elimina i miei dati`)
};

const nl_settings_privacy_data_link = /** @type {(inputs: Settings_Privacy_Data_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn gegevens exporteren of verwijderen`)
};

const pl_settings_privacy_data_link = /** @type {(inputs: Settings_Privacy_Data_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eksportuj lub usuń moje dane`)
};

const pt_settings_privacy_data_link = /** @type {(inputs: Settings_Privacy_Data_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportar ou excluir meus dados`)
};

const ru_settings_privacy_data_link = /** @type {(inputs: Settings_Privacy_Data_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Экспортировать или удалить мои данные`)
};

const sv_settings_privacy_data_link = /** @type {(inputs: Settings_Privacy_Data_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportera eller radera mina data`)
};

const tr_settings_privacy_data_link = /** @type {(inputs: Settings_Privacy_Data_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verilerimi dışa aktar veya sil`)
};

const zh_settings_privacy_data_link = /** @type {(inputs: Settings_Privacy_Data_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导出或删除我的数据`)
};

const ja_settings_privacy_data_link = /** @type {(inputs: Settings_Privacy_Data_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`データをエクスポート・削除`)
};

/**
* | output |
* | --- |
* | "Export or delete my data" |
*
* @param {Settings_Privacy_Data_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_privacy_data_link = /** @type {((inputs?: Settings_Privacy_Data_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Privacy_Data_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_privacy_data_link(inputs)
	if (locale === "de") return de_settings_privacy_data_link(inputs)
	if (locale === "fr") return fr_settings_privacy_data_link(inputs)
	if (locale === "it") return it_settings_privacy_data_link(inputs)
	if (locale === "nl") return nl_settings_privacy_data_link(inputs)
	if (locale === "pl") return pl_settings_privacy_data_link(inputs)
	if (locale === "pt") return pt_settings_privacy_data_link(inputs)
	if (locale === "ru") return ru_settings_privacy_data_link(inputs)
	if (locale === "sv") return sv_settings_privacy_data_link(inputs)
	if (locale === "tr") return tr_settings_privacy_data_link(inputs)
	if (locale === "zh") return zh_settings_privacy_data_link(inputs)
	if (locale === "ja") return ja_settings_privacy_data_link(inputs)
	return en_settings_privacy_data_link(inputs)
});
