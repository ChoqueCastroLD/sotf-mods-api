/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Share_DescriptionInputs */

const en_kits_share_description = /** @type {(inputs: Kits_Share_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Give friends the code or the short link: everyone gets the same loadout.`)
};

const es_kits_share_description = /** @type {(inputs: Kits_Share_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pasa a tus amigos el código o el enlace corto: todos tendréis el mismo loadout.`)
};

const de_kits_share_description = /** @type {(inputs: Kits_Share_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib Freunden den Code oder den Kurzlink: Alle bekommen dasselbe Loadout.`)
};

const fr_kits_share_description = /** @type {(inputs: Kits_Share_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Donnez le code ou le lien court à vos amis : tout le monde aura le même loadout.`)
};

const it_kits_share_description = /** @type {(inputs: Kits_Share_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passa agli amici il codice o il link breve: tutti avranno lo stesso loadout.`)
};

const nl_kits_share_description = /** @type {(inputs: Kits_Share_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geef vrienden de code of de korte link: iedereen krijgt dezelfde loadout.`)
};

const pl_kits_share_description = /** @type {(inputs: Kits_Share_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przekaż znajomym kod lub krótki link: wszyscy dostaną ten sam zestaw.`)
};

const pt_kits_share_description = /** @type {(inputs: Kits_Share_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passe o código ou o link curto aos amigos: todos terão o mesmo loadout.`)
};

const ru_kits_share_description = /** @type {(inputs: Kits_Share_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Передайте друзьям код или короткую ссылку — у всех будет одинаковый набор.`)
};

const sv_kits_share_description = /** @type {(inputs: Kits_Share_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ge vännerna koden eller kortlänken: alla får samma paket.`)
};

const tr_kits_share_description = /** @type {(inputs: Kits_Share_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arkadaşlarına kodu ya da kısa bağlantıyı ver: herkes aynı seti alır.`)
};

const zh_kits_share_description = /** @type {(inputs: Kits_Share_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把代码或短链接发给朋友，大家就能用同一套搭配。`)
};

const ja_kits_share_description = /** @type {(inputs: Kits_Share_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コードか短縮リンクを渡せば、全員が同じ構成をそろえられます。`)
};

/**
* | output |
* | --- |
* | "Give friends the code or the short link: everyone gets the same loadout." |
*
* @param {Kits_Share_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_share_description = /** @type {((inputs?: Kits_Share_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_share_description(inputs)
	if (locale === "de") return de_kits_share_description(inputs)
	if (locale === "fr") return fr_kits_share_description(inputs)
	if (locale === "it") return it_kits_share_description(inputs)
	if (locale === "nl") return nl_kits_share_description(inputs)
	if (locale === "pl") return pl_kits_share_description(inputs)
	if (locale === "pt") return pt_kits_share_description(inputs)
	if (locale === "ru") return ru_kits_share_description(inputs)
	if (locale === "sv") return sv_kits_share_description(inputs)
	if (locale === "tr") return tr_kits_share_description(inputs)
	if (locale === "zh") return zh_kits_share_description(inputs)
	if (locale === "ja") return ja_kits_share_description(inputs)
	return en_kits_share_description(inputs)
});
