/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Offline_CheckingInputs */

const en_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking the connection…`)
};

const es_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprobando la conexión…`)
};

const de_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbindung wird geprüft…`)
};

const fr_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérification de la connexion…`)
};

const it_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controllo della connessione…`)
};

const nl_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbinding controleren…`)
};

const pl_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdzanie połączenia…`)
};

const pt_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificando a conexão…`)
};

const ru_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверка подключения…`)
};

const sv_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollerar anslutningen…`)
};

const tr_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı kontrol ediliyor…`)
};

const zh_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在检查连接…`)
};

const ja_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接続を確認しています…`)
};

/**
* | output |
* | --- |
* | "Checking the connection…" |
*
* @param {Shell_Offline_CheckingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_offline_checking = /** @type {((inputs?: Shell_Offline_CheckingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Offline_CheckingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_offline_checking(inputs)
	if (locale === "de") return de_shell_offline_checking(inputs)
	if (locale === "fr") return fr_shell_offline_checking(inputs)
	if (locale === "it") return it_shell_offline_checking(inputs)
	if (locale === "nl") return nl_shell_offline_checking(inputs)
	if (locale === "pl") return pl_shell_offline_checking(inputs)
	if (locale === "pt") return pt_shell_offline_checking(inputs)
	if (locale === "ru") return ru_shell_offline_checking(inputs)
	if (locale === "sv") return sv_shell_offline_checking(inputs)
	if (locale === "tr") return tr_shell_offline_checking(inputs)
	if (locale === "zh") return zh_shell_offline_checking(inputs)
	if (locale === "ja") return ja_shell_offline_checking(inputs)
	return en_shell_offline_checking(inputs)
});
