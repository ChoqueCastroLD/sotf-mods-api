/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Errors_Field_Too_LongInputs */

const en_errors_field_too_long = /** @type {(inputs: Errors_Field_Too_LongInputs) => LocalizedString} */ (i) => {const max__plural = registry.plural("en", i?.max, {});
	const max__number = registry.number("en", i?.max, {});
	if (max__plural === "one") return /** @type {LocalizedString} */ (`Use at most ${max__number} character.`);
	return /** @type {LocalizedString} */ (`Use at most ${max__number} characters.`)
	
};

const es_errors_field_too_long = /** @type {(inputs: Errors_Field_Too_LongInputs) => LocalizedString} */ (i) => {const max__plural = registry.plural("es", i?.max, {});
	const max__number = registry.number("es", i?.max, {});
	if (max__plural === "one") return /** @type {LocalizedString} */ (`Usa como máximo ${max__number} carácter.`);
	return /** @type {LocalizedString} */ (`Usa como máximo ${max__number} caracteres.`)
	
};

const de_errors_field_too_long = /** @type {(inputs: Errors_Field_Too_LongInputs) => LocalizedString} */ (i) => {const max__plural = registry.plural("de", i?.max, {});
	const max__number = registry.number("de", i?.max, {});
	if (max__plural === "one") return /** @type {LocalizedString} */ (`Verwende höchstens ${max__number} Zeichen.`);
	return /** @type {LocalizedString} */ (`Verwende höchstens ${max__number} Zeichen.`)
	
};

const fr_errors_field_too_long = /** @type {(inputs: Errors_Field_Too_LongInputs) => LocalizedString} */ (i) => {const max__plural = registry.plural("fr", i?.max, {});
	const max__number = registry.number("fr", i?.max, {});
	if (max__plural === "one") return /** @type {LocalizedString} */ (`Utilisez au maximum ${max__number} caractère.`);
	return /** @type {LocalizedString} */ (`Utilisez au maximum ${max__number} caractères.`)
	
};

const it_errors_field_too_long = /** @type {(inputs: Errors_Field_Too_LongInputs) => LocalizedString} */ (i) => {const max__plural = registry.plural("it", i?.max, {});
	const max__number = registry.number("it", i?.max, {});
	if (max__plural === "one") return /** @type {LocalizedString} */ (`Usa al massimo ${max__number} carattere.`);
	return /** @type {LocalizedString} */ (`Usa al massimo ${max__number} caratteri.`)
	
};

const nl_errors_field_too_long = /** @type {(inputs: Errors_Field_Too_LongInputs) => LocalizedString} */ (i) => {const max__plural = registry.plural("nl", i?.max, {});
	const max__number = registry.number("nl", i?.max, {});
	if (max__plural === "one") return /** @type {LocalizedString} */ (`Gebruik maximaal ${max__number} teken.`);
	return /** @type {LocalizedString} */ (`Gebruik maximaal ${max__number} tekens.`)
	
};

const pl_errors_field_too_long = /** @type {(inputs: Errors_Field_Too_LongInputs) => LocalizedString} */ (i) => {const max__plural = registry.plural("pl", i?.max, {});
	const max__number = registry.number("pl", i?.max, {});
	if (max__plural === "one") return /** @type {LocalizedString} */ (`Użyj najwyżej ${max__number} znaku.`);
	if (max__plural === "few") return /** @type {LocalizedString} */ (`Użyj najwyżej ${max__number} znaków.`);
	if (max__plural === "many") return /** @type {LocalizedString} */ (`Użyj najwyżej ${max__number} znaków.`);
	return /** @type {LocalizedString} */ (`Użyj najwyżej ${max__number} znaku.`)
	
};

const pt_errors_field_too_long = /** @type {(inputs: Errors_Field_Too_LongInputs) => LocalizedString} */ (i) => {const max__plural = registry.plural("pt", i?.max, {});
	const max__number = registry.number("pt", i?.max, {});
	if (max__plural === "one") return /** @type {LocalizedString} */ (`Use no máximo ${max__number} caractere.`);
	return /** @type {LocalizedString} */ (`Use no máximo ${max__number} caracteres.`)
	
};

const ru_errors_field_too_long = /** @type {(inputs: Errors_Field_Too_LongInputs) => LocalizedString} */ (i) => {const max__plural = registry.plural("ru", i?.max, {});
	const max__number = registry.number("ru", i?.max, {});
	if (max__plural === "one") return /** @type {LocalizedString} */ (`Введите не более ${max__number} символа.`);
	if (max__plural === "few") return /** @type {LocalizedString} */ (`Введите не более ${max__number} символов.`);
	if (max__plural === "many") return /** @type {LocalizedString} */ (`Введите не более ${max__number} символов.`);
	return /** @type {LocalizedString} */ (`Введите не более ${max__number} символа.`)
	
};

const sv_errors_field_too_long = /** @type {(inputs: Errors_Field_Too_LongInputs) => LocalizedString} */ (i) => {const max__plural = registry.plural("sv", i?.max, {});
	const max__number = registry.number("sv", i?.max, {});
	if (max__plural === "one") return /** @type {LocalizedString} */ (`Använd högst ${max__number} tecken.`);
	return /** @type {LocalizedString} */ (`Använd högst ${max__number} tecken.`)
	
};

const tr_errors_field_too_long = /** @type {(inputs: Errors_Field_Too_LongInputs) => LocalizedString} */ (i) => {const max__plural = registry.plural("tr", i?.max, {});
	const max__number = registry.number("tr", i?.max, {});
	if (max__plural === "one") return /** @type {LocalizedString} */ (`En fazla ${max__number} karakter kullan.`);
	return /** @type {LocalizedString} */ (`En fazla ${max__number} karakter kullan.`)
	
};

const zh_errors_field_too_long = /** @type {(inputs: Errors_Field_Too_LongInputs) => LocalizedString} */ (i) => {
	const max__plural = registry.plural("zh", i?.max, {});
	const max__number = registry.number("zh", i?.max, {});return /** @type {LocalizedString} */ (`最多只能输入 ${max__number} 个字符。`)
};

const ja_errors_field_too_long = /** @type {(inputs: Errors_Field_Too_LongInputs) => LocalizedString} */ (i) => {
	const max__plural = registry.plural("ja", i?.max, {});
	const max__number = registry.number("ja", i?.max, {});return /** @type {LocalizedString} */ (`${max__number} 文字以内で入力してください。`)
};

/**
* | max__plural | output |
* | --- | --- |
* | "one" | "Use at most {max__number} character." |
* | * | "Use at most {max__number} characters." |
*
* @param {Errors_Field_Too_LongInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_field_too_long = /** @type {((inputs: Errors_Field_Too_LongInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Field_Too_LongInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_field_too_long(inputs)
	if (locale === "de") return de_errors_field_too_long(inputs)
	if (locale === "fr") return fr_errors_field_too_long(inputs)
	if (locale === "it") return it_errors_field_too_long(inputs)
	if (locale === "nl") return nl_errors_field_too_long(inputs)
	if (locale === "pl") return pl_errors_field_too_long(inputs)
	if (locale === "pt") return pt_errors_field_too_long(inputs)
	if (locale === "ru") return ru_errors_field_too_long(inputs)
	if (locale === "sv") return sv_errors_field_too_long(inputs)
	if (locale === "tr") return tr_errors_field_too_long(inputs)
	if (locale === "zh") return zh_errors_field_too_long(inputs)
	if (locale === "ja") return ja_errors_field_too_long(inputs)
	return en_errors_field_too_long(inputs)
});
