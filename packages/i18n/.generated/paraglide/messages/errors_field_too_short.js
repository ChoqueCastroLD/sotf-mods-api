/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ min: NonNullable<unknown> }} Errors_Field_Too_ShortInputs */

const en_errors_field_too_short = /** @type {(inputs: Errors_Field_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("en", i?.min, {});
	const min__number = registry.number("en", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Use at least ${min__number} character.`);
	return /** @type {LocalizedString} */ (`Use at least ${min__number} characters.`)
	
};

const es_errors_field_too_short = /** @type {(inputs: Errors_Field_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("es", i?.min, {});
	const min__number = registry.number("es", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Usa al menos ${min__number} carácter.`);
	return /** @type {LocalizedString} */ (`Usa al menos ${min__number} caracteres.`)
	
};

const de_errors_field_too_short = /** @type {(inputs: Errors_Field_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("de", i?.min, {});
	const min__number = registry.number("de", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Verwende mindestens ${min__number} Zeichen.`);
	return /** @type {LocalizedString} */ (`Verwende mindestens ${min__number} Zeichen.`)
	
};

const fr_errors_field_too_short = /** @type {(inputs: Errors_Field_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("fr", i?.min, {});
	const min__number = registry.number("fr", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Utilisez au moins ${min__number} caractère.`);
	return /** @type {LocalizedString} */ (`Utilisez au moins ${min__number} caractères.`)
	
};

const it_errors_field_too_short = /** @type {(inputs: Errors_Field_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("it", i?.min, {});
	const min__number = registry.number("it", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Usa almeno ${min__number} carattere.`);
	return /** @type {LocalizedString} */ (`Usa almeno ${min__number} caratteri.`)
	
};

const nl_errors_field_too_short = /** @type {(inputs: Errors_Field_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("nl", i?.min, {});
	const min__number = registry.number("nl", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Gebruik minstens ${min__number} teken.`);
	return /** @type {LocalizedString} */ (`Gebruik minstens ${min__number} tekens.`)
	
};

const pl_errors_field_too_short = /** @type {(inputs: Errors_Field_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("pl", i?.min, {});
	const min__number = registry.number("pl", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Użyj co najmniej ${min__number} znaku.`);
	if (min__plural === "few") return /** @type {LocalizedString} */ (`Użyj co najmniej ${min__number} znaków.`);
	if (min__plural === "many") return /** @type {LocalizedString} */ (`Użyj co najmniej ${min__number} znaków.`);
	return /** @type {LocalizedString} */ (`Użyj co najmniej ${min__number} znaku.`)
	
};

const pt_errors_field_too_short = /** @type {(inputs: Errors_Field_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("pt", i?.min, {});
	const min__number = registry.number("pt", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Use pelo menos ${min__number} caractere.`);
	return /** @type {LocalizedString} */ (`Use pelo menos ${min__number} caracteres.`)
	
};

const ru_errors_field_too_short = /** @type {(inputs: Errors_Field_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("ru", i?.min, {});
	const min__number = registry.number("ru", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Введите не менее ${min__number} символа.`);
	if (min__plural === "few") return /** @type {LocalizedString} */ (`Введите не менее ${min__number} символов.`);
	if (min__plural === "many") return /** @type {LocalizedString} */ (`Введите не менее ${min__number} символов.`);
	return /** @type {LocalizedString} */ (`Введите не менее ${min__number} символа.`)
	
};

const sv_errors_field_too_short = /** @type {(inputs: Errors_Field_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("sv", i?.min, {});
	const min__number = registry.number("sv", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Använd minst ${min__number} tecken.`);
	return /** @type {LocalizedString} */ (`Använd minst ${min__number} tecken.`)
	
};

const tr_errors_field_too_short = /** @type {(inputs: Errors_Field_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("tr", i?.min, {});
	const min__number = registry.number("tr", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`En az ${min__number} karakter kullan.`);
	return /** @type {LocalizedString} */ (`En az ${min__number} karakter kullan.`)
	
};

const zh_errors_field_too_short = /** @type {(inputs: Errors_Field_Too_ShortInputs) => LocalizedString} */ (i) => {
	const min__plural = registry.plural("zh", i?.min, {});
	const min__number = registry.number("zh", i?.min, {});return /** @type {LocalizedString} */ (`请至少输入 ${min__number} 个字符。`)
};

const ja_errors_field_too_short = /** @type {(inputs: Errors_Field_Too_ShortInputs) => LocalizedString} */ (i) => {
	const min__plural = registry.plural("ja", i?.min, {});
	const min__number = registry.number("ja", i?.min, {});return /** @type {LocalizedString} */ (`${min__number} 文字以上で入力してください。`)
};

/**
* | min__plural | output |
* | --- | --- |
* | "one" | "Use at least {min__number} character." |
* | * | "Use at least {min__number} characters." |
*
* @param {Errors_Field_Too_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_field_too_short = /** @type {((inputs: Errors_Field_Too_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Field_Too_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_field_too_short(inputs)
	if (locale === "de") return de_errors_field_too_short(inputs)
	if (locale === "fr") return fr_errors_field_too_short(inputs)
	if (locale === "it") return it_errors_field_too_short(inputs)
	if (locale === "nl") return nl_errors_field_too_short(inputs)
	if (locale === "pl") return pl_errors_field_too_short(inputs)
	if (locale === "pt") return pt_errors_field_too_short(inputs)
	if (locale === "ru") return ru_errors_field_too_short(inputs)
	if (locale === "sv") return sv_errors_field_too_short(inputs)
	if (locale === "tr") return tr_errors_field_too_short(inputs)
	if (locale === "zh") return zh_errors_field_too_short(inputs)
	if (locale === "ja") return ja_errors_field_too_short(inputs)
	return en_errors_field_too_short(inputs)
});
