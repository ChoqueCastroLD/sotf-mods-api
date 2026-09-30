/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Field_Slug_HintInputs */

const en_admin_tax_field_slug_hint = /** @type {(inputs: Admin_Tax_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Part of the URL. Changing it breaks old links unless the old slug stays as a legacy slug.`)
};

const es_admin_tax_field_slug_hint = /** @type {(inputs: Admin_Tax_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parte de la URL. Cambiarlo rompe los enlaces viejos salvo que el slug anterior quede como slug antiguo.`)
};

const de_admin_tax_field_slug_hint = /** @type {(inputs: Admin_Tax_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teil der URL. Eine Änderung bricht alte Links, außer der alte Slug bleibt als alter Slug erhalten.`)
};

const fr_admin_tax_field_slug_hint = /** @type {(inputs: Admin_Tax_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partie de l’URL. Le changer casse les vieux liens, sauf si l’ancien slug reste comme ancien slug.`)
};

const it_admin_tax_field_slug_hint = /** @type {(inputs: Admin_Tax_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parte dell’URL. Cambiarlo rompe i vecchi link, a meno che il vecchio slug resti come vecchio slug.`)
};

const nl_admin_tax_field_slug_hint = /** @type {(inputs: Admin_Tax_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deel van de URL. Wijzigen breekt oude links, tenzij de oude slug als oude slug blijft staan.`)
};

const pl_admin_tax_field_slug_hint = /** @type {(inputs: Admin_Tax_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Część adresu URL. Zmiana psuje stare linki, chyba że poprzedni slug zostanie jako stary slug.`)
};

const pt_admin_tax_field_slug_hint = /** @type {(inputs: Admin_Tax_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parte da URL. Mudá-lo quebra links antigos, a menos que o slug anterior fique como slug antigo.`)
};

const ru_admin_tax_field_slug_hint = /** @type {(inputs: Admin_Tax_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Часть URL. Смена ломает старые ссылки, если прежний слаг не оставить в старых слагах.`)
};

const sv_admin_tax_field_slug_hint = /** @type {(inputs: Admin_Tax_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Del av URL:en. Att ändra den bryter gamla länkar, om inte den tidigare sluggen ligger kvar som gammal slug.`)
};

const tr_admin_tax_field_slug_hint = /** @type {(inputs: Admin_Tax_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL’nin parçası. Değiştirmek eski bağlantıları bozar, önceki slug eski slug olarak kalmadıkça.`)
};

const zh_admin_tax_field_slug_hint = /** @type {(inputs: Admin_Tax_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL 的一部分。修改会导致旧链接失效，除非把原 slug 保留为旧 slug。`)
};

const ja_admin_tax_field_slug_hint = /** @type {(inputs: Admin_Tax_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL の一部です。変更すると古いリンクが切れます（元のスラッグを旧スラッグに残す場合を除く）。`)
};

/**
* | output |
* | --- |
* | "Part of the URL. Changing it breaks old links unless the old slug stays as a legacy slug." |
*
* @param {Admin_Tax_Field_Slug_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_field_slug_hint = /** @type {((inputs?: Admin_Tax_Field_Slug_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Field_Slug_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_field_slug_hint(inputs)
	if (locale === "de") return de_admin_tax_field_slug_hint(inputs)
	if (locale === "fr") return fr_admin_tax_field_slug_hint(inputs)
	if (locale === "it") return it_admin_tax_field_slug_hint(inputs)
	if (locale === "nl") return nl_admin_tax_field_slug_hint(inputs)
	if (locale === "pl") return pl_admin_tax_field_slug_hint(inputs)
	if (locale === "pt") return pt_admin_tax_field_slug_hint(inputs)
	if (locale === "ru") return ru_admin_tax_field_slug_hint(inputs)
	if (locale === "sv") return sv_admin_tax_field_slug_hint(inputs)
	if (locale === "tr") return tr_admin_tax_field_slug_hint(inputs)
	if (locale === "zh") return zh_admin_tax_field_slug_hint(inputs)
	if (locale === "ja") return ja_admin_tax_field_slug_hint(inputs)
	return en_admin_tax_field_slug_hint(inputs)
});
