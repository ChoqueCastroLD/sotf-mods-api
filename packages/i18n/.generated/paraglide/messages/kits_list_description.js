/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_List_DescriptionInputs */

const en_kits_list_description = /** @type {(inputs: Kits_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Curated loadouts of Sons of the Forest mods: dependencies included, compatibility checked and one code to hand to your friends.`)
};

const es_kits_list_description = /** @type {(inputs: Kits_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loadouts de mods de Sons of the Forest seleccionados por la comunidad: dependencias incluidas, compatibilidad revisada y un solo código para pasárselo a tus amigos.`)
};

const de_kits_list_description = /** @type {(inputs: Kits_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kuratierte Loadouts aus Mods für Sons of the Forest: mit Abhängigkeiten, geprüfter Kompatibilität und einem Code, den du deinen Freunden gibst.`)
};

const fr_kits_list_description = /** @type {(inputs: Kits_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des loadouts de mods pour Sons of the Forest choisis par la communauté : dépendances incluses, compatibilité vérifiée et un seul code à donner à vos amis.`)
};

const it_kits_list_description = /** @type {(inputs: Kits_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loadout di mod per Sons of the Forest scelti dalla community: dipendenze incluse, compatibilità verificata e un solo codice da passare agli amici.`)
};

const nl_kits_list_description = /** @type {(inputs: Kits_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samengestelde loadouts van Sons of the Forest-mods: inclusief afhankelijkheden, gecontroleerde compatibiliteit en één code voor je vrienden.`)
};

const pl_kits_list_description = /** @type {(inputs: Kits_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyselekcjonowane zestawy modów do Sons of the Forest: z zależnościami, sprawdzoną zgodnością i jednym kodem dla znajomych.`)
};

const pt_kits_list_description = /** @type {(inputs: Kits_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loadouts de mods de Sons of the Forest escolhidos pela comunidade: dependências incluídas, compatibilidade verificada e um só código para passar aos amigos.`)
};

const ru_kits_list_description = /** @type {(inputs: Kits_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подборки модов для Sons of the Forest: с зависимостями, проверенной совместимостью и одним кодом, который можно передать друзьям.`)
};

const sv_kits_list_description = /** @type {(inputs: Kits_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utvalda paket med moddar för Sons of the Forest: beroenden ingår, kompatibiliteten är kontrollerad och en enda kod att ge till vännerna.`)
};

const tr_kits_list_description = /** @type {(inputs: Kits_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest için seçilmiş mod setleri: bağımlılıklar dahil, uyumluluk kontrol edilmiş ve arkadaşlarına verebileceğin tek bir kod.`)
};

const zh_kits_list_description = /** @type {(inputs: Kits_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`精选的 Sons of the Forest 模组搭配：自带依赖、已检查兼容性，只需一个代码就能分享给朋友。`)
};

const ja_kits_list_description = /** @type {(inputs: Kits_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`厳選された Sons of the Forest の MOD 構成。依存 MOD 込み、互換性チェック済みで、コードひとつで仲間と共有できます。`)
};

/**
* | output |
* | --- |
* | "Curated loadouts of Sons of the Forest mods: dependencies included, compatibility checked and one code to hand to your friends." |
*
* @param {Kits_List_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_list_description = /** @type {((inputs?: Kits_List_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_List_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_list_description(inputs)
	if (locale === "de") return de_kits_list_description(inputs)
	if (locale === "fr") return fr_kits_list_description(inputs)
	if (locale === "it") return it_kits_list_description(inputs)
	if (locale === "nl") return nl_kits_list_description(inputs)
	if (locale === "pl") return pl_kits_list_description(inputs)
	if (locale === "pt") return pt_kits_list_description(inputs)
	if (locale === "ru") return ru_kits_list_description(inputs)
	if (locale === "sv") return sv_kits_list_description(inputs)
	if (locale === "tr") return tr_kits_list_description(inputs)
	if (locale === "zh") return zh_kits_list_description(inputs)
	if (locale === "ja") return ja_kits_list_description(inputs)
	return en_kits_list_description(inputs)
});
