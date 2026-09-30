/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ min: NonNullable<unknown> }} Kits_Name_Too_ShortInputs */

const en_kits_name_too_short = /** @type {(inputs: Kits_Name_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("en", i?.min, {});
	const min__number = registry.number("en", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Use at least ${min__number} character.`);
	return /** @type {LocalizedString} */ (`Use at least ${min__number} characters.`)
	
};

const es_kits_name_too_short = /** @type {(inputs: Kits_Name_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("es", i?.min, {});
	const min__number = registry.number("es", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Usa al menos ${min__number} carácter.`);
	return /** @type {LocalizedString} */ (`Usa al menos ${min__number} caracteres.`)
	
};

const de_kits_name_too_short = /** @type {(inputs: Kits_Name_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("de", i?.min, {});
	const min__number = registry.number("de", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Mindestens ${min__number} Zeichen.`);
	return /** @type {LocalizedString} */ (`Mindestens ${min__number} Zeichen.`)
	
};

const fr_kits_name_too_short = /** @type {(inputs: Kits_Name_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("fr", i?.min, {});
	const min__number = registry.number("fr", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Au moins ${min__number} caractère.`);
	return /** @type {LocalizedString} */ (`Au moins ${min__number} caractères.`)
	
};

const it_kits_name_too_short = /** @type {(inputs: Kits_Name_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("it", i?.min, {});
	const min__number = registry.number("it", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Usa almeno ${min__number} carattere.`);
	return /** @type {LocalizedString} */ (`Usa almeno ${min__number} caratteri.`)
	
};

const nl_kits_name_too_short = /** @type {(inputs: Kits_Name_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("nl", i?.min, {});
	const min__number = registry.number("nl", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Gebruik minstens ${min__number} teken.`);
	return /** @type {LocalizedString} */ (`Gebruik minstens ${min__number} tekens.`)
	
};

const pl_kits_name_too_short = /** @type {(inputs: Kits_Name_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("pl", i?.min, {});
	const min__number = registry.number("pl", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Użyj co najmniej ${min__number} znaku.`);
	if (min__plural === "few") return /** @type {LocalizedString} */ (`Użyj co najmniej ${min__number} znaków.`);
	if (min__plural === "many") return /** @type {LocalizedString} */ (`Użyj co najmniej ${min__number} znaków.`);
	return /** @type {LocalizedString} */ (`Użyj co najmniej ${min__number} znaku.`)
	
};

const pt_kits_name_too_short = /** @type {(inputs: Kits_Name_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("pt", i?.min, {});
	const min__number = registry.number("pt", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Use pelo menos ${min__number} caractere.`);
	return /** @type {LocalizedString} */ (`Use pelo menos ${min__number} caracteres.`)
	
};

const ru_kits_name_too_short = /** @type {(inputs: Kits_Name_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("ru", i?.min, {});
	const min__number = registry.number("ru", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Минимум ${min__number} символ.`);
	if (min__plural === "few") return /** @type {LocalizedString} */ (`Минимум ${min__number} символа.`);
	if (min__plural === "many") return /** @type {LocalizedString} */ (`Минимум ${min__number} символов.`);
	return /** @type {LocalizedString} */ (`Минимум ${min__number} символа.`)
	
};

const sv_kits_name_too_short = /** @type {(inputs: Kits_Name_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("sv", i?.min, {});
	const min__number = registry.number("sv", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`Minst ${min__number} tecken.`);
	return /** @type {LocalizedString} */ (`Minst ${min__number} tecken.`)
	
};

const tr_kits_name_too_short = /** @type {(inputs: Kits_Name_Too_ShortInputs) => LocalizedString} */ (i) => {const min__plural = registry.plural("tr", i?.min, {});
	const min__number = registry.number("tr", i?.min, {});
	if (min__plural === "one") return /** @type {LocalizedString} */ (`En az ${min__number} karakter kullan.`);
	return /** @type {LocalizedString} */ (`En az ${min__number} karakter kullan.`)
	
};

const zh_kits_name_too_short = /** @type {(inputs: Kits_Name_Too_ShortInputs) => LocalizedString} */ (i) => {
	const min__plural = registry.plural("zh", i?.min, {});
	const min__number = registry.number("zh", i?.min, {});return /** @type {LocalizedString} */ (`至少 ${min__number} 个字符。`)
};

const ja_kits_name_too_short = /** @type {(inputs: Kits_Name_Too_ShortInputs) => LocalizedString} */ (i) => {
	const min__plural = registry.plural("ja", i?.min, {});
	const min__number = registry.number("ja", i?.min, {});return /** @type {LocalizedString} */ (`${min__number} 文字以上で入力してください。`)
};

/**
* | min__plural | output |
* | --- | --- |
* | "one" | "Use at least {min__number} character." |
* | * | "Use at least {min__number} characters." |
*
* @param {Kits_Name_Too_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_name_too_short = /** @type {((inputs: Kits_Name_Too_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Name_Too_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_name_too_short(inputs)
	if (locale === "de") return de_kits_name_too_short(inputs)
	if (locale === "fr") return fr_kits_name_too_short(inputs)
	if (locale === "it") return it_kits_name_too_short(inputs)
	if (locale === "nl") return nl_kits_name_too_short(inputs)
	if (locale === "pl") return pl_kits_name_too_short(inputs)
	if (locale === "pt") return pt_kits_name_too_short(inputs)
	if (locale === "ru") return ru_kits_name_too_short(inputs)
	if (locale === "sv") return sv_kits_name_too_short(inputs)
	if (locale === "tr") return tr_kits_name_too_short(inputs)
	if (locale === "zh") return zh_kits_name_too_short(inputs)
	if (locale === "ja") return ja_kits_name_too_short(inputs)
	return en_kits_name_too_short(inputs)
});
