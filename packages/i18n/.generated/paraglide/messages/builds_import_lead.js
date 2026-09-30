/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Import_LeadInputs */

const en_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A build is a BuildShare blueprint: one .json file that you drop into your game and place like a prefab.`)
};

const es_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una build es un plano de BuildShare: un solo archivo .json que pones en tu juego y colocas como una construcción prefabricada.`)
};

const de_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Build ist ein BuildShare-Bauplan: eine einzige .json-Datei, die du ins Spiel legst und wie ein Fertigteil platzierst.`)
};

const fr_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une build est un plan BuildShare : un seul fichier .json que vous déposez dans le jeu et placez comme une construction préfabriquée.`)
};

const it_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una build è un progetto BuildShare: un solo file .json da mettere nel gioco e piazzare come una costruzione prefabbricata.`)
};

const nl_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een build is een BuildShare-bouwtekening: één .json-bestand dat je in je game zet en plaatst als een kant-en-klaar bouwwerk.`)
};

const pl_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build to plan BuildShare: jeden plik .json, który wrzucasz do gry i stawiasz jak gotową konstrukcję.`)
};

const pt_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma build é uma planta do BuildShare: um único arquivo .json que você coloca no jogo e posiciona como uma construção pré-fabricada.`)
};

const ru_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Постройка — это чертёж BuildShare: один файл .json, который вы кладёте в игру и ставите как готовое строение.`)
};

const sv_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett bygge är en BuildShare-ritning: en enda .json-fil som du lägger i spelet och placerar som en färdig konstruktion.`)
};

const tr_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir yapı, BuildShare planıdır: oyuna koyup hazır bir yapı gibi yerleştirdiğin tek bir .json dosyası.`)
};

const zh_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑就是 BuildShare 蓝图：一个 .json 文件，放进游戏后即可像预制建筑一样放置。`)
};

const ja_builds_import_lead = /** @type {(inputs: Builds_Import_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築は BuildShare の設計図です。.json ファイル 1 つをゲームに入れ、プレハブのように配置できます。`)
};

/**
* | output |
* | --- |
* | "A build is a BuildShare blueprint: one .json file that you drop into your game and place like a prefab." |
*
* @param {Builds_Import_LeadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_import_lead = /** @type {((inputs?: Builds_Import_LeadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_LeadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_import_lead(inputs)
	if (locale === "de") return de_builds_import_lead(inputs)
	if (locale === "fr") return fr_builds_import_lead(inputs)
	if (locale === "it") return it_builds_import_lead(inputs)
	if (locale === "nl") return nl_builds_import_lead(inputs)
	if (locale === "pl") return pl_builds_import_lead(inputs)
	if (locale === "pt") return pt_builds_import_lead(inputs)
	if (locale === "ru") return ru_builds_import_lead(inputs)
	if (locale === "sv") return sv_builds_import_lead(inputs)
	if (locale === "tr") return tr_builds_import_lead(inputs)
	if (locale === "zh") return zh_builds_import_lead(inputs)
	if (locale === "ja") return ja_builds_import_lead(inputs)
	return en_builds_import_lead(inputs)
});
