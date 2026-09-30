/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ min: NonNullable<unknown>, max: NonNullable<unknown> }} Requests_Field_Title_HintInputs */

const en_requests_field_title_hint = /** @type {(inputs: Requests_Field_Title_HintInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("en", i?.min, {});
	const max__number = registry.number("en", i?.max, {});return /** @type {LocalizedString} */ (`${min__number}–${max__number} characters. Say what the mod should do.`)
};

const es_requests_field_title_hint = /** @type {(inputs: Requests_Field_Title_HintInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("es", i?.min, {});
	const max__number = registry.number("es", i?.max, {});return /** @type {LocalizedString} */ (`${min__number}–${max__number} caracteres. Di qué debería hacer el mod.`)
};

const de_requests_field_title_hint = /** @type {(inputs: Requests_Field_Title_HintInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("de", i?.min, {});
	const max__number = registry.number("de", i?.max, {});return /** @type {LocalizedString} */ (`${min__number}–${max__number} Zeichen. Sag, was der Mod tun soll.`)
};

const fr_requests_field_title_hint = /** @type {(inputs: Requests_Field_Title_HintInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("fr", i?.min, {});
	const max__number = registry.number("fr", i?.max, {});return /** @type {LocalizedString} */ (`${min__number}–${max__number} caractères. Dites ce que le mod doit faire.`)
};

const it_requests_field_title_hint = /** @type {(inputs: Requests_Field_Title_HintInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("it", i?.min, {});
	const max__number = registry.number("it", i?.max, {});return /** @type {LocalizedString} */ (`${min__number}–${max__number} caratteri. Di cosa dovrebbe fare il mod.`)
};

const nl_requests_field_title_hint = /** @type {(inputs: Requests_Field_Title_HintInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("nl", i?.min, {});
	const max__number = registry.number("nl", i?.max, {});return /** @type {LocalizedString} */ (`${min__number}–${max__number} tekens. Zeg wat de mod moet doen.`)
};

const pl_requests_field_title_hint = /** @type {(inputs: Requests_Field_Title_HintInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("pl", i?.min, {});
	const max__number = registry.number("pl", i?.max, {});return /** @type {LocalizedString} */ (`${min__number}–${max__number} znaków. Napisz, co ma robić mod.`)
};

const pt_requests_field_title_hint = /** @type {(inputs: Requests_Field_Title_HintInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("pt", i?.min, {});
	const max__number = registry.number("pt", i?.max, {});return /** @type {LocalizedString} */ (`${min__number}–${max__number} caracteres. Diga o que o mod deve fazer.`)
};

const ru_requests_field_title_hint = /** @type {(inputs: Requests_Field_Title_HintInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("ru", i?.min, {});
	const max__number = registry.number("ru", i?.max, {});return /** @type {LocalizedString} */ (`${min__number}–${max__number} символов. Скажите, что должен делать мод.`)
};

const sv_requests_field_title_hint = /** @type {(inputs: Requests_Field_Title_HintInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("sv", i?.min, {});
	const max__number = registry.number("sv", i?.max, {});return /** @type {LocalizedString} */ (`${min__number}–${max__number} tecken. Säg vad modden ska göra.`)
};

const tr_requests_field_title_hint = /** @type {(inputs: Requests_Field_Title_HintInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("tr", i?.min, {});
	const max__number = registry.number("tr", i?.max, {});return /** @type {LocalizedString} */ (`${min__number}–${max__number} karakter. Modun ne yapması gerektiğini yazın.`)
};

const zh_requests_field_title_hint = /** @type {(inputs: Requests_Field_Title_HintInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("zh", i?.min, {});
	const max__number = registry.number("zh", i?.max, {});return /** @type {LocalizedString} */ (`${min__number}–${max__number} 个字符，说明模组应该做什么。`)
};

const ja_requests_field_title_hint = /** @type {(inputs: Requests_Field_Title_HintInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("ja", i?.min, {});
	const max__number = registry.number("ja", i?.max, {});return /** @type {LocalizedString} */ (`${min__number}〜${max__number} 文字。MOD に何をしてほしいか書いてください。`)
};

/**
* | output |
* | --- |
* | "{min__number}–{max__number} characters. Say what the mod should do." |
*
* @param {Requests_Field_Title_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_field_title_hint = /** @type {((inputs: Requests_Field_Title_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Field_Title_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_field_title_hint(inputs)
	if (locale === "de") return de_requests_field_title_hint(inputs)
	if (locale === "fr") return fr_requests_field_title_hint(inputs)
	if (locale === "it") return it_requests_field_title_hint(inputs)
	if (locale === "nl") return nl_requests_field_title_hint(inputs)
	if (locale === "pl") return pl_requests_field_title_hint(inputs)
	if (locale === "pt") return pt_requests_field_title_hint(inputs)
	if (locale === "ru") return ru_requests_field_title_hint(inputs)
	if (locale === "sv") return sv_requests_field_title_hint(inputs)
	if (locale === "tr") return tr_requests_field_title_hint(inputs)
	if (locale === "zh") return zh_requests_field_title_hint(inputs)
	if (locale === "ja") return ja_requests_field_title_hint(inputs)
	return en_requests_field_title_hint(inputs)
});
