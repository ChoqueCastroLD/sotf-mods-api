/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Field_BodyInputs */

const en_requests_field_body = /** @type {(inputs: Requests_Field_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details (optional)`)
};

const es_requests_field_body = /** @type {(inputs: Requests_Field_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalles (opcional)`)
};

const de_requests_field_body = /** @type {(inputs: Requests_Field_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details (optional)`)
};

const fr_requests_field_body = /** @type {(inputs: Requests_Field_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détails (facultatif)`)
};

const it_requests_field_body = /** @type {(inputs: Requests_Field_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dettagli (facoltativo)`)
};

const nl_requests_field_body = /** @type {(inputs: Requests_Field_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details (optioneel)`)
};

const pl_requests_field_body = /** @type {(inputs: Requests_Field_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szczegóły (opcjonalnie)`)
};

const pt_requests_field_body = /** @type {(inputs: Requests_Field_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalhes (opcional)`)
};

const ru_requests_field_body = /** @type {(inputs: Requests_Field_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подробности (необязательно)`)
};

const sv_requests_field_body = /** @type {(inputs: Requests_Field_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detaljer (valfritt)`)
};

const tr_requests_field_body = /** @type {(inputs: Requests_Field_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayrıntılar (isteğe bağlı)`)
};

const zh_requests_field_body = /** @type {(inputs: Requests_Field_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`详情（可选）`)
};

const ja_requests_field_body = /** @type {(inputs: Requests_Field_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細（任意）`)
};

/**
* | output |
* | --- |
* | "Details (optional)" |
*
* @param {Requests_Field_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_field_body = /** @type {((inputs?: Requests_Field_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Field_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_field_body(inputs)
	if (locale === "de") return de_requests_field_body(inputs)
	if (locale === "fr") return fr_requests_field_body(inputs)
	if (locale === "it") return it_requests_field_body(inputs)
	if (locale === "nl") return nl_requests_field_body(inputs)
	if (locale === "pl") return pl_requests_field_body(inputs)
	if (locale === "pt") return pt_requests_field_body(inputs)
	if (locale === "ru") return ru_requests_field_body(inputs)
	if (locale === "sv") return sv_requests_field_body(inputs)
	if (locale === "tr") return tr_requests_field_body(inputs)
	if (locale === "zh") return zh_requests_field_body(inputs)
	if (locale === "ja") return ja_requests_field_body(inputs)
	return en_requests_field_body(inputs)
});
