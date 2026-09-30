/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_Empty_HintInputs */

const en_translations_empty_hint = /** @type {(inputs: Translations_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear a field to go back to its automatic translation.`)
};

const es_translations_empty_hint = /** @type {(inputs: Translations_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vacía un campo para volver a su traducción automática.`)
};

const de_translations_empty_hint = /** @type {(inputs: Translations_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leere ein Feld, um zur automatischen Übersetzung zurückzukehren.`)
};

const fr_translations_empty_hint = /** @type {(inputs: Translations_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Videz un champ pour revenir à sa traduction automatique.`)
};

const it_translations_empty_hint = /** @type {(inputs: Translations_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svuota un campo per tornare alla sua traduzione automatica.`)
};

const nl_translations_empty_hint = /** @type {(inputs: Translations_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maak een veld leeg om terug te gaan naar de automatische vertaling.`)
};

const pl_translations_empty_hint = /** @type {(inputs: Translations_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść pole, aby wrócić do jego automatycznego tłumaczenia.`)
};

const pt_translations_empty_hint = /** @type {(inputs: Translations_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esvazie um campo para voltar à tradução automática.`)
};

const ru_translations_empty_hint = /** @type {(inputs: Translations_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очистите поле, чтобы вернуться к автоматическому переводу.`)
};

const sv_translations_empty_hint = /** @type {(inputs: Translations_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Töm ett fält för att gå tillbaka till den automatiska översättningen.`)
};

const tr_translations_empty_hint = /** @type {(inputs: Translations_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otomatik çeviriye dönmek için bir alanı boşaltın.`)
};

const zh_translations_empty_hint = /** @type {(inputs: Translations_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清空某个字段即可恢复为自动翻译。`)
};

const ja_translations_empty_hint = /** @type {(inputs: Translations_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドを空にすると自動翻訳に戻ります。`)
};

/**
* | output |
* | --- |
* | "Clear a field to go back to its automatic translation." |
*
* @param {Translations_Empty_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_empty_hint = /** @type {((inputs?: Translations_Empty_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Empty_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_empty_hint(inputs)
	if (locale === "de") return de_translations_empty_hint(inputs)
	if (locale === "fr") return fr_translations_empty_hint(inputs)
	if (locale === "it") return it_translations_empty_hint(inputs)
	if (locale === "nl") return nl_translations_empty_hint(inputs)
	if (locale === "pl") return pl_translations_empty_hint(inputs)
	if (locale === "pt") return pt_translations_empty_hint(inputs)
	if (locale === "ru") return ru_translations_empty_hint(inputs)
	if (locale === "sv") return sv_translations_empty_hint(inputs)
	if (locale === "tr") return tr_translations_empty_hint(inputs)
	if (locale === "zh") return zh_translations_empty_hint(inputs)
	if (locale === "ja") return ja_translations_empty_hint(inputs)
	return en_translations_empty_hint(inputs)
});
