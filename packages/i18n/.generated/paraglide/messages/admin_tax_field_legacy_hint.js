/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Field_Legacy_HintInputs */

const en_admin_tax_field_legacy_hint = /** @type {(inputs: Admin_Tax_Field_Legacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Old slugs that redirect here, separated by commas.`)
};

const es_admin_tax_field_legacy_hint = /** @type {(inputs: Admin_Tax_Field_Legacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slugs viejos que redirigen aquí, separados por comas.`)
};

const de_admin_tax_field_legacy_hint = /** @type {(inputs: Admin_Tax_Field_Legacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alte Slugs, die hierher weiterleiten, durch Kommas getrennt.`)
};

const fr_admin_tax_field_legacy_hint = /** @type {(inputs: Admin_Tax_Field_Legacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vieux slugs qui redirigent ici, séparés par des virgules.`)
};

const it_admin_tax_field_legacy_hint = /** @type {(inputs: Admin_Tax_Field_Legacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vecchi slug che reindirizzano qui, separati da virgole.`)
};

const nl_admin_tax_field_legacy_hint = /** @type {(inputs: Admin_Tax_Field_Legacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oude slugs die hierheen doorverwijzen, gescheiden door komma’s.`)
};

const pl_admin_tax_field_legacy_hint = /** @type {(inputs: Admin_Tax_Field_Legacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stare slugi przekierowujące tutaj, rozdzielone przecinkami.`)
};

const pt_admin_tax_field_legacy_hint = /** @type {(inputs: Admin_Tax_Field_Legacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slugs antigos que redirecionam para cá, separados por vírgulas.`)
};

const ru_admin_tax_field_legacy_hint = /** @type {(inputs: Admin_Tax_Field_Legacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Прежние слаги, которые ведут сюда, через запятую.`)
};

const sv_admin_tax_field_legacy_hint = /** @type {(inputs: Admin_Tax_Field_Legacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gamla sluggar som omdirigerar hit, kommaseparerade.`)
};

const tr_admin_tax_field_legacy_hint = /** @type {(inputs: Admin_Tax_Field_Legacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buraya yönlendiren eski slug’lar, virgülle ayrılmış.`)
};

const zh_admin_tax_field_legacy_hint = /** @type {(inputs: Admin_Tax_Field_Legacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重定向到这里的旧 slug，用逗号分隔。`)
};

const ja_admin_tax_field_legacy_hint = /** @type {(inputs: Admin_Tax_Field_Legacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここにリダイレクトする古いスラッグ（カンマ区切り）。`)
};

/**
* | output |
* | --- |
* | "Old slugs that redirect here, separated by commas." |
*
* @param {Admin_Tax_Field_Legacy_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_field_legacy_hint = /** @type {((inputs?: Admin_Tax_Field_Legacy_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Field_Legacy_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_field_legacy_hint(inputs)
	if (locale === "de") return de_admin_tax_field_legacy_hint(inputs)
	if (locale === "fr") return fr_admin_tax_field_legacy_hint(inputs)
	if (locale === "it") return it_admin_tax_field_legacy_hint(inputs)
	if (locale === "nl") return nl_admin_tax_field_legacy_hint(inputs)
	if (locale === "pl") return pl_admin_tax_field_legacy_hint(inputs)
	if (locale === "pt") return pt_admin_tax_field_legacy_hint(inputs)
	if (locale === "ru") return ru_admin_tax_field_legacy_hint(inputs)
	if (locale === "sv") return sv_admin_tax_field_legacy_hint(inputs)
	if (locale === "tr") return tr_admin_tax_field_legacy_hint(inputs)
	if (locale === "zh") return zh_admin_tax_field_legacy_hint(inputs)
	if (locale === "ja") return ja_admin_tax_field_legacy_hint(inputs)
	return en_admin_tax_field_legacy_hint(inputs)
});
