/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Field_Slug_HintInputs */

const en_kits_field_slug_hint = /** @type {(inputs: Kits_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lowercase letters, digits and hyphens, used in /kits/you/address.`)
};

const es_kits_field_slug_hint = /** @type {(inputs: Kits_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minúsculas, cifras y guiones; se usa en /kits/tú/dirección.`)
};

const de_kits_field_slug_hint = /** @type {(inputs: Kits_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kleinbuchstaben, Ziffern und Bindestriche, genutzt in /kits/du/adresse.`)
};

const fr_kits_field_slug_hint = /** @type {(inputs: Kits_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minuscules, chiffres et tirets, utilisés dans /kits/vous/adresse.`)
};

const it_kits_field_slug_hint = /** @type {(inputs: Kits_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lettere minuscole, cifre e trattini, usati in /kits/tu/indirizzo.`)
};

const nl_kits_field_slug_hint = /** @type {(inputs: Kits_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kleine letters, cijfers en koppeltekens, gebruikt in /kits/jij/adres.`)
};

const pl_kits_field_slug_hint = /** @type {(inputs: Kits_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Małe litery, cyfry i łączniki, używane w /kits/ty/adres.`)
};

const pt_kits_field_slug_hint = /** @type {(inputs: Kits_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letras minúsculas, números e hifens, usados em /kits/você/endereço.`)
};

const ru_kits_field_slug_hint = /** @type {(inputs: Kits_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Строчные латинские буквы, цифры и дефисы: /kits/вы/адрес.`)
};

const sv_kits_field_slug_hint = /** @type {(inputs: Kits_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Små bokstäver, siffror och bindestreck, används i /kits/du/adress.`)
};

const tr_kits_field_slug_hint = /** @type {(inputs: Kits_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Küçük harf, rakam ve kısa çizgi; /kits/sen/adres içinde kullanılır.`)
};

const zh_kits_field_slug_hint = /** @type {(inputs: Kits_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小写字母、数字和连字符，用于 /kits/你/地址。`)
};

const ja_kits_field_slug_hint = /** @type {(inputs: Kits_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小文字・数字・ハイフンのみ。/kits/あなた/アドレス に使われます。`)
};

/**
* | output |
* | --- |
* | "Lowercase letters, digits and hyphens, used in /kits/you/address." |
*
* @param {Kits_Field_Slug_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_field_slug_hint = /** @type {((inputs?: Kits_Field_Slug_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Field_Slug_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_field_slug_hint(inputs)
	if (locale === "de") return de_kits_field_slug_hint(inputs)
	if (locale === "fr") return fr_kits_field_slug_hint(inputs)
	if (locale === "it") return it_kits_field_slug_hint(inputs)
	if (locale === "nl") return nl_kits_field_slug_hint(inputs)
	if (locale === "pl") return pl_kits_field_slug_hint(inputs)
	if (locale === "pt") return pt_kits_field_slug_hint(inputs)
	if (locale === "ru") return ru_kits_field_slug_hint(inputs)
	if (locale === "sv") return sv_kits_field_slug_hint(inputs)
	if (locale === "tr") return tr_kits_field_slug_hint(inputs)
	if (locale === "zh") return zh_kits_field_slug_hint(inputs)
	if (locale === "ja") return ja_kits_field_slug_hint(inputs)
	return en_kits_field_slug_hint(inputs)
});
