/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_No_VersionsInputs */

const en_basecamp_inbox_no_versions = /** @type {(inputs: Basecamp_Inbox_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This mod has no available version to pick.`)
};

const es_basecamp_inbox_no_versions = /** @type {(inputs: Basecamp_Inbox_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod no tiene ninguna versión disponible para elegir.`)
};

const de_basecamp_inbox_no_versions = /** @type {(inputs: Basecamp_Inbox_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Mod hat keine verfügbare Version zur Auswahl.`)
};

const fr_basecamp_inbox_no_versions = /** @type {(inputs: Basecamp_Inbox_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce mod n’a aucune version disponible à choisir.`)
};

const it_basecamp_inbox_no_versions = /** @type {(inputs: Basecamp_Inbox_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa mod non ha versioni disponibili da scegliere.`)
};

const nl_basecamp_inbox_no_versions = /** @type {(inputs: Basecamp_Inbox_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze mod heeft geen beschikbare versie om te kiezen.`)
};

const pl_basecamp_inbox_no_versions = /** @type {(inputs: Basecamp_Inbox_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten mod nie ma dostępnej wersji do wyboru.`)
};

const pt_basecamp_inbox_no_versions = /** @type {(inputs: Basecamp_Inbox_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod não tem nenhuma versão disponível para escolher.`)
};

const ru_basecamp_inbox_no_versions = /** @type {(inputs: Basecamp_Inbox_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У этого мода нет доступной версии для выбора.`)
};

const sv_basecamp_inbox_no_versions = /** @type {(inputs: Basecamp_Inbox_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här modden har ingen tillgänglig version att välja.`)
};

const tr_basecamp_inbox_no_versions = /** @type {(inputs: Basecamp_Inbox_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu modun seçilecek kullanılabilir sürümü yok.`)
};

const zh_basecamp_inbox_no_versions = /** @type {(inputs: Basecamp_Inbox_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此模组没有可选择的可用版本。`)
};

const ja_basecamp_inbox_no_versions = /** @type {(inputs: Basecamp_Inbox_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD には選べる利用可能なバージョンがありません。`)
};

/**
* | output |
* | --- |
* | "This mod has no available version to pick." |
*
* @param {Basecamp_Inbox_No_VersionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_no_versions = /** @type {((inputs?: Basecamp_Inbox_No_VersionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_No_VersionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_no_versions(inputs)
	if (locale === "de") return de_basecamp_inbox_no_versions(inputs)
	if (locale === "fr") return fr_basecamp_inbox_no_versions(inputs)
	if (locale === "it") return it_basecamp_inbox_no_versions(inputs)
	if (locale === "nl") return nl_basecamp_inbox_no_versions(inputs)
	if (locale === "pl") return pl_basecamp_inbox_no_versions(inputs)
	if (locale === "pt") return pt_basecamp_inbox_no_versions(inputs)
	if (locale === "ru") return ru_basecamp_inbox_no_versions(inputs)
	if (locale === "sv") return sv_basecamp_inbox_no_versions(inputs)
	if (locale === "tr") return tr_basecamp_inbox_no_versions(inputs)
	if (locale === "zh") return zh_basecamp_inbox_no_versions(inputs)
	if (locale === "ja") return ja_basecamp_inbox_no_versions(inputs)
	return en_basecamp_inbox_no_versions(inputs)
});
