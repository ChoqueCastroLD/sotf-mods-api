/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Slug_TakenInputs */

const en_upload_preflight_slug_taken = /** @type {(inputs: Upload_Preflight_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You already have a listing at this address.`)
};

const es_upload_preflight_slug_taken = /** @type {(inputs: Upload_Preflight_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya tienes una ficha en esta dirección.`)
};

const de_upload_preflight_slug_taken = /** @type {(inputs: Upload_Preflight_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast schon einen Eintrag unter dieser Adresse.`)
};

const fr_upload_preflight_slug_taken = /** @type {(inputs: Upload_Preflight_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez déjà une fiche à cette adresse.`)
};

const it_upload_preflight_slug_taken = /** @type {(inputs: Upload_Preflight_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai già una scheda a questo indirizzo.`)
};

const nl_upload_preflight_slug_taken = /** @type {(inputs: Upload_Preflight_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt al een vermelding op dit adres.`)
};

const pl_upload_preflight_slug_taken = /** @type {(inputs: Upload_Preflight_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masz już wpis pod tym adresem.`)
};

const pt_upload_preflight_slug_taken = /** @type {(inputs: Upload_Preflight_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você já tem uma ficha neste endereço.`)
};

const ru_upload_preflight_slug_taken = /** @type {(inputs: Upload_Preflight_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У вас уже есть карточка по этому адресу.`)
};

const sv_upload_preflight_slug_taken = /** @type {(inputs: Upload_Preflight_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har redan en sida på den här adressen.`)
};

const tr_upload_preflight_slug_taken = /** @type {(inputs: Upload_Preflight_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu adreste zaten bir sayfan var.`)
};

const zh_upload_preflight_slug_taken = /** @type {(inputs: Upload_Preflight_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你在这个地址已有页面。`)
};

const ja_upload_preflight_slug_taken = /** @type {(inputs: Upload_Preflight_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このアドレスのページはすでにあります。`)
};

/**
* | output |
* | --- |
* | "You already have a listing at this address." |
*
* @param {Upload_Preflight_Slug_TakenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_slug_taken = /** @type {((inputs?: Upload_Preflight_Slug_TakenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Slug_TakenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_slug_taken(inputs)
	if (locale === "de") return de_upload_preflight_slug_taken(inputs)
	if (locale === "fr") return fr_upload_preflight_slug_taken(inputs)
	if (locale === "it") return it_upload_preflight_slug_taken(inputs)
	if (locale === "nl") return nl_upload_preflight_slug_taken(inputs)
	if (locale === "pl") return pl_upload_preflight_slug_taken(inputs)
	if (locale === "pt") return pt_upload_preflight_slug_taken(inputs)
	if (locale === "ru") return ru_upload_preflight_slug_taken(inputs)
	if (locale === "sv") return sv_upload_preflight_slug_taken(inputs)
	if (locale === "tr") return tr_upload_preflight_slug_taken(inputs)
	if (locale === "zh") return zh_upload_preflight_slug_taken(inputs)
	if (locale === "ja") return ja_upload_preflight_slug_taken(inputs)
	return en_upload_preflight_slug_taken(inputs)
});
