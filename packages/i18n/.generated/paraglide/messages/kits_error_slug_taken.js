/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Error_Slug_TakenInputs */

const en_kits_error_slug_taken = /** @type {(inputs: Kits_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You already have a kit at this address. Pick another one.`)
};

const es_kits_error_slug_taken = /** @type {(inputs: Kits_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya tienes un kit con esta dirección. Elige otra.`)
};

const de_kits_error_slug_taken = /** @type {(inputs: Kits_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast schon ein Kit unter dieser Adresse. Wähle eine andere.`)
};

const fr_kits_error_slug_taken = /** @type {(inputs: Kits_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez déjà un kit à cette adresse. Choisissez-en une autre.`)
};

const it_kits_error_slug_taken = /** @type {(inputs: Kits_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai già un kit con questo indirizzo. Scegline un altro.`)
};

const nl_kits_error_slug_taken = /** @type {(inputs: Kits_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt al een kit op dit adres. Kies een ander.`)
};

const pl_kits_error_slug_taken = /** @type {(inputs: Kits_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masz już zestaw pod tym adresem. Wybierz inny.`)
};

const pt_kits_error_slug_taken = /** @type {(inputs: Kits_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você já tem um kit neste endereço. Escolha outro.`)
};

const ru_kits_error_slug_taken = /** @type {(inputs: Kits_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У вас уже есть набор с таким адресом. Выберите другой.`)
};

const sv_kits_error_slug_taken = /** @type {(inputs: Kits_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har redan ett kit på den adressen. Välj en annan.`)
};

const tr_kits_error_slug_taken = /** @type {(inputs: Kits_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu adreste zaten bir kitin var. Başka bir adres seç.`)
};

const zh_kits_error_slug_taken = /** @type {(inputs: Kits_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已有一个套装使用这个地址，请换一个。`)
};

const ja_kits_error_slug_taken = /** @type {(inputs: Kits_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このアドレスのキットはすでにあります。別のアドレスにしてください。`)
};

/**
* | output |
* | --- |
* | "You already have a kit at this address. Pick another one." |
*
* @param {Kits_Error_Slug_TakenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_error_slug_taken = /** @type {((inputs?: Kits_Error_Slug_TakenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Error_Slug_TakenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_error_slug_taken(inputs)
	if (locale === "de") return de_kits_error_slug_taken(inputs)
	if (locale === "fr") return fr_kits_error_slug_taken(inputs)
	if (locale === "it") return it_kits_error_slug_taken(inputs)
	if (locale === "nl") return nl_kits_error_slug_taken(inputs)
	if (locale === "pl") return pl_kits_error_slug_taken(inputs)
	if (locale === "pt") return pt_kits_error_slug_taken(inputs)
	if (locale === "ru") return ru_kits_error_slug_taken(inputs)
	if (locale === "sv") return sv_kits_error_slug_taken(inputs)
	if (locale === "tr") return tr_kits_error_slug_taken(inputs)
	if (locale === "zh") return zh_kits_error_slug_taken(inputs)
	if (locale === "ja") return ja_kits_error_slug_taken(inputs)
	return en_kits_error_slug_taken(inputs)
});
