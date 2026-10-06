/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Details_Discovery_HintInputs */

const en_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`They decide where players find it in Mods and search.`)
};

const es_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deciden dónde lo encuentran los jugadores en Mods y en la búsqueda.`)
};

const de_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sie bestimmen, wo Spieler ihn unter Mods und in der Suche finden.`)
};

const fr_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ils décident où les joueurs le trouvent dans Mods et la recherche.`)
};

const it_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Decidono dove i giocatori la trovano in Mod e nella ricerca.`)
};

const nl_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ze bepalen waar spelers hem vinden bij Mods en in zoeken.`)
};

const pl_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Od nich zależy, gdzie gracze go znajdą w Modach i wyszukiwarce.`)
};

const pt_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elas decidem onde os jogadores o encontram em Mods e na busca.`)
};

const ru_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`От них зависит, где игроки найдут его в разделе «Моды» и в поиске.`)
};

const sv_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De avgör var spelare hittar den under Moddar och i sökningen.`)
};

const tr_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncuların onu Modlar’da ve aramada nerede bulacağını belirler.`)
};

const zh_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`它们决定玩家在“模组”和搜索中从哪里找到它。`)
};

const ja_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤーが「MOD」や検索で見つける場所が決まります。`)
};

/**
* | output |
* | --- |
* | "They decide where players find it in Mods and search." |
*
* @param {Upload_Details_Discovery_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_details_discovery_hint = /** @type {((inputs?: Upload_Details_Discovery_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Details_Discovery_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_details_discovery_hint(inputs)
	if (locale === "de") return de_upload_details_discovery_hint(inputs)
	if (locale === "fr") return fr_upload_details_discovery_hint(inputs)
	if (locale === "it") return it_upload_details_discovery_hint(inputs)
	if (locale === "nl") return nl_upload_details_discovery_hint(inputs)
	if (locale === "pl") return pl_upload_details_discovery_hint(inputs)
	if (locale === "pt") return pt_upload_details_discovery_hint(inputs)
	if (locale === "ru") return ru_upload_details_discovery_hint(inputs)
	if (locale === "sv") return sv_upload_details_discovery_hint(inputs)
	if (locale === "tr") return tr_upload_details_discovery_hint(inputs)
	if (locale === "zh") return zh_upload_details_discovery_hint(inputs)
	if (locale === "ja") return ja_upload_details_discovery_hint(inputs)
	return en_upload_details_discovery_hint(inputs)
});
