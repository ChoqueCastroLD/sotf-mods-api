/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Server_StatusInputs */

const en_errors_server_status = /** @type {(inputs: Errors_Server_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check the status on Discord`)
};

const es_errors_server_status = /** @type {(inputs: Errors_Server_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consulta el estado en Discord`)
};

const de_errors_server_status = /** @type {(inputs: Errors_Server_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status auf Discord prüfen`)
};

const fr_errors_server_status = /** @type {(inputs: Errors_Server_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir l’état sur Discord`)
};

const it_errors_server_status = /** @type {(inputs: Errors_Server_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlla lo stato su Discord`)
};

const nl_errors_server_status = /** @type {(inputs: Errors_Server_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekijk de status op Discord`)
};

const pl_errors_server_status = /** @type {(inputs: Errors_Server_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdź status na Discordzie`)
};

const pt_errors_server_status = /** @type {(inputs: Errors_Server_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veja o status no Discord`)
};

const ru_errors_server_status = /** @type {(inputs: Errors_Server_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус в Discord`)
};

const sv_errors_server_status = /** @type {(inputs: Errors_Server_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se status på Discord`)
};

const tr_errors_server_status = /** @type {(inputs: Errors_Server_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durumu Discord’da kontrol et`)
};

const zh_errors_server_status = /** @type {(inputs: Errors_Server_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 Discord 查看状态`)
};

const ja_errors_server_status = /** @type {(inputs: Errors_Server_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord で状況を確認`)
};

/**
* | output |
* | --- |
* | "Check the status on Discord" |
*
* @param {Errors_Server_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_server_status = /** @type {((inputs?: Errors_Server_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Server_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_server_status(inputs)
	if (locale === "de") return de_errors_server_status(inputs)
	if (locale === "fr") return fr_errors_server_status(inputs)
	if (locale === "it") return it_errors_server_status(inputs)
	if (locale === "nl") return nl_errors_server_status(inputs)
	if (locale === "pl") return pl_errors_server_status(inputs)
	if (locale === "pt") return pt_errors_server_status(inputs)
	if (locale === "ru") return ru_errors_server_status(inputs)
	if (locale === "sv") return sv_errors_server_status(inputs)
	if (locale === "tr") return tr_errors_server_status(inputs)
	if (locale === "zh") return zh_errors_server_status(inputs)
	if (locale === "ja") return ja_errors_server_status(inputs)
	return en_errors_server_status(inputs)
});
