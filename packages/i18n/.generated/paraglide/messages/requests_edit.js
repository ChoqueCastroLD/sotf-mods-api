/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_EditInputs */

const en_requests_edit = /** @type {(inputs: Requests_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit request`)
};

const es_requests_edit = /** @type {(inputs: Requests_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar petición`)
};

const de_requests_edit = /** @type {(inputs: Requests_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wunsch bearbeiten`)
};

const fr_requests_edit = /** @type {(inputs: Requests_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier la demande`)
};

const it_requests_edit = /** @type {(inputs: Requests_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica la richiesta`)
};

const nl_requests_edit = /** @type {(inputs: Requests_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoek bewerken`)
};

const pl_requests_edit = /** @type {(inputs: Requests_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj prośbę`)
};

const pt_requests_edit = /** @type {(inputs: Requests_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar pedido`)
};

const ru_requests_edit = /** @type {(inputs: Requests_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить запрос`)
};

const sv_requests_edit = /** @type {(inputs: Requests_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera önskemålet`)
};

const tr_requests_edit = /** @type {(inputs: Requests_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İsteği düzenle`)
};

const zh_requests_edit = /** @type {(inputs: Requests_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑请求`)
};

const ja_requests_edit = /** @type {(inputs: Requests_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストを編集`)
};

/**
* | output |
* | --- |
* | "Edit request" |
*
* @param {Requests_EditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_edit = /** @type {((inputs?: Requests_EditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_EditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_edit(inputs)
	if (locale === "de") return de_requests_edit(inputs)
	if (locale === "fr") return fr_requests_edit(inputs)
	if (locale === "it") return it_requests_edit(inputs)
	if (locale === "nl") return nl_requests_edit(inputs)
	if (locale === "pl") return pl_requests_edit(inputs)
	if (locale === "pt") return pt_requests_edit(inputs)
	if (locale === "ru") return ru_requests_edit(inputs)
	if (locale === "sv") return sv_requests_edit(inputs)
	if (locale === "tr") return tr_requests_edit(inputs)
	if (locale === "zh") return zh_requests_edit(inputs)
	if (locale === "ja") return ja_requests_edit(inputs)
	return en_requests_edit(inputs)
});
