/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ url: NonNullable<unknown> }} Auth_Field_Handle_HintInputs */

const en_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your address on the island: ${i?.url}. It can’t be changed later.`)
};

const es_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tu dirección en la isla: ${i?.url}. No se puede cambiar después.`)
};

const de_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deine Adresse auf der Insel: ${i?.url}. Sie kann später nicht geändert werden.`)
};

const fr_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Votre adresse sur l’île : ${i?.url}. Elle ne pourra plus être modifiée.`)
};

const it_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il tuo indirizzo sull’isola: ${i?.url}. Non potrai cambiarlo in seguito.`)
};

const nl_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je adres op het eiland: ${i?.url}. Dit kan later niet meer worden gewijzigd.`)
};

const pl_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Twój adres na wyspie: ${i?.url}. Później nie da się go zmienić.`)
};

const pt_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seu endereço na ilha: ${i?.url}. Não pode ser alterado depois.`)
};

const ru_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ваш адрес на острове: ${i?.url}. Изменить его потом будет нельзя.`)
};

const sv_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Din adress på ön: ${i?.url}. Den kan inte ändras senare.`)
};

const tr_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adadaki adresin: ${i?.url}. Daha sonra değiştirilemez.`)
};

const zh_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你在岛上的地址：${i?.url}。之后无法更改。`)
};

const ja_auth_field_handle_hint = /** @type {(inputs: Auth_Field_Handle_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`島でのあなたのアドレス：${i?.url}。あとから変更できません。`)
};

/**
* | output |
* | --- |
* | "Your address on the island: {url}. It can’t be changed later." |
*
* @param {Auth_Field_Handle_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_field_handle_hint = /** @type {((inputs: Auth_Field_Handle_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Field_Handle_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_field_handle_hint(inputs)
	if (locale === "de") return de_auth_field_handle_hint(inputs)
	if (locale === "fr") return fr_auth_field_handle_hint(inputs)
	if (locale === "it") return it_auth_field_handle_hint(inputs)
	if (locale === "nl") return nl_auth_field_handle_hint(inputs)
	if (locale === "pl") return pl_auth_field_handle_hint(inputs)
	if (locale === "pt") return pt_auth_field_handle_hint(inputs)
	if (locale === "ru") return ru_auth_field_handle_hint(inputs)
	if (locale === "sv") return sv_auth_field_handle_hint(inputs)
	if (locale === "tr") return tr_auth_field_handle_hint(inputs)
	if (locale === "zh") return zh_auth_field_handle_hint(inputs)
	if (locale === "ja") return ja_auth_field_handle_hint(inputs)
	return en_auth_field_handle_hint(inputs)
});
