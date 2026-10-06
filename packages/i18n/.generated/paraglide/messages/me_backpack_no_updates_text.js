/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Backpack_No_Updates_TextInputs */

const en_me_backpack_no_updates_text = /** @type {(inputs: Me_Backpack_No_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No mod you follow has a version newer than the one you downloaded.`)
};

const es_me_backpack_no_updates_text = /** @type {(inputs: Me_Backpack_No_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ningún mod que sigues tiene una versión más nueva que la que descargaste.`)
};

const de_me_backpack_no_updates_text = /** @type {(inputs: Me_Backpack_No_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Mod, dem du folgst, hat eine neuere Version als die, die du heruntergeladen hast.`)
};

const fr_me_backpack_no_updates_text = /** @type {(inputs: Me_Backpack_No_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun mod que vous suivez n’a de version plus récente que celle que vous avez téléchargée.`)
};

const it_me_backpack_no_updates_text = /** @type {(inputs: Me_Backpack_No_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna mod che segui ha una versione più recente di quella che hai scaricato.`)
};

const nl_me_backpack_no_updates_text = /** @type {(inputs: Me_Backpack_No_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen enkele mod die je volgt heeft een nieuwere versie dan die je hebt gedownload.`)
};

const pl_me_backpack_no_updates_text = /** @type {(inputs: Me_Backpack_No_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden obserwowany mod nie ma nowszej wersji niż ta, którą pobrałeś.`)
};

const pt_me_backpack_no_updates_text = /** @type {(inputs: Me_Backpack_No_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum mod que você segue tem versão mais nova do que a que você baixou.`)
};

const ru_me_backpack_no_updates_text = /** @type {(inputs: Me_Backpack_No_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ни у одного мода из подписок нет версии новее той, что вы скачали.`)
};

const sv_me_backpack_no_updates_text = /** @type {(inputs: Me_Backpack_No_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen modd du följer har en nyare version än den du laddade ned.`)
};

const tr_me_backpack_no_updates_text = /** @type {(inputs: Me_Backpack_No_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ettiğin hiçbir modun indirdiğinden daha yeni bir sürümü yok.`)
};

const zh_me_backpack_no_updates_text = /** @type {(inputs: Me_Backpack_No_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你关注的模组中，没有比你下载的版本更新的。`)
};

const ja_me_backpack_no_updates_text = /** @type {(inputs: Me_Backpack_No_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中のMODに、ダウンロードしたものより新しいバージョンはありません。`)
};

/**
* | output |
* | --- |
* | "No mod you follow has a version newer than the one you downloaded." |
*
* @param {Me_Backpack_No_Updates_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_no_updates_text = /** @type {((inputs?: Me_Backpack_No_Updates_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_No_Updates_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_no_updates_text(inputs)
	if (locale === "de") return de_me_backpack_no_updates_text(inputs)
	if (locale === "fr") return fr_me_backpack_no_updates_text(inputs)
	if (locale === "it") return it_me_backpack_no_updates_text(inputs)
	if (locale === "nl") return nl_me_backpack_no_updates_text(inputs)
	if (locale === "pl") return pl_me_backpack_no_updates_text(inputs)
	if (locale === "pt") return pt_me_backpack_no_updates_text(inputs)
	if (locale === "ru") return ru_me_backpack_no_updates_text(inputs)
	if (locale === "sv") return sv_me_backpack_no_updates_text(inputs)
	if (locale === "tr") return tr_me_backpack_no_updates_text(inputs)
	if (locale === "zh") return zh_me_backpack_no_updates_text(inputs)
	if (locale === "ja") return ja_me_backpack_no_updates_text(inputs)
	return en_me_backpack_no_updates_text(inputs)
});
