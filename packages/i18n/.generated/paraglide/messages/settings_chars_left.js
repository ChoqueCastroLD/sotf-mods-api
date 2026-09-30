/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Settings_Chars_LeftInputs */

const en_settings_chars_left = /** @type {(inputs: Settings_Chars_LeftInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} character left`);
	return /** @type {LocalizedString} */ (`${count__number} characters left`)
	
};

const es_settings_chars_left = /** @type {(inputs: Settings_Chars_LeftInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Queda ${count__number} carácter`);
	return /** @type {LocalizedString} */ (`Quedan ${count__number} caracteres`)
	
};

const de_settings_chars_left = /** @type {(inputs: Settings_Chars_LeftInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Noch ${count__number} Zeichen`);
	return /** @type {LocalizedString} */ (`Noch ${count__number} Zeichen`)
	
};

const fr_settings_chars_left = /** @type {(inputs: Settings_Chars_LeftInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} caractère restant`);
	return /** @type {LocalizedString} */ (`${count__number} caractères restants`)
	
};

const it_settings_chars_left = /** @type {(inputs: Settings_Chars_LeftInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Resta ${count__number} carattere`);
	return /** @type {LocalizedString} */ (`Restano ${count__number} caratteri`)
	
};

const nl_settings_chars_left = /** @type {(inputs: Settings_Chars_LeftInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nog ${count__number} teken`);
	return /** @type {LocalizedString} */ (`Nog ${count__number} tekens`)
	
};

const pl_settings_chars_left = /** @type {(inputs: Settings_Chars_LeftInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Został ${count__number} znak`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Zostały ${count__number} znaki`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Zostało ${count__number} znaków`);
	return /** @type {LocalizedString} */ (`Zostało ${count__number} znaku`)
	
};

const pt_settings_chars_left = /** @type {(inputs: Settings_Chars_LeftInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Resta ${count__number} caractere`);
	return /** @type {LocalizedString} */ (`Restam ${count__number} caracteres`)
	
};

const ru_settings_chars_left = /** @type {(inputs: Settings_Chars_LeftInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Остался ${count__number} символ`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Осталось ${count__number} символа`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Осталось ${count__number} символов`);
	return /** @type {LocalizedString} */ (`Осталось ${count__number} символа`)
	
};

const sv_settings_chars_left = /** @type {(inputs: Settings_Chars_LeftInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} tecken kvar`);
	return /** @type {LocalizedString} */ (`${count__number} tecken kvar`)
	
};

const tr_settings_chars_left = /** @type {(inputs: Settings_Chars_LeftInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} karakter kaldı`);
	return /** @type {LocalizedString} */ (`${count__number} karakter kaldı`)
	
};

const zh_settings_chars_left = /** @type {(inputs: Settings_Chars_LeftInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`还剩 ${count__number} 个字符`)
};

const ja_settings_chars_left = /** @type {(inputs: Settings_Chars_LeftInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`残り ${count__number} 文字`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} character left" |
* | * | "{count__number} characters left" |
*
* @param {Settings_Chars_LeftInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_chars_left = /** @type {((inputs: Settings_Chars_LeftInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Chars_LeftInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_chars_left(inputs)
	if (locale === "de") return de_settings_chars_left(inputs)
	if (locale === "fr") return fr_settings_chars_left(inputs)
	if (locale === "it") return it_settings_chars_left(inputs)
	if (locale === "nl") return nl_settings_chars_left(inputs)
	if (locale === "pl") return pl_settings_chars_left(inputs)
	if (locale === "pt") return pt_settings_chars_left(inputs)
	if (locale === "ru") return ru_settings_chars_left(inputs)
	if (locale === "sv") return sv_settings_chars_left(inputs)
	if (locale === "tr") return tr_settings_chars_left(inputs)
	if (locale === "zh") return zh_settings_chars_left(inputs)
	if (locale === "ja") return ja_settings_chars_left(inputs)
	return en_settings_chars_left(inputs)
});
