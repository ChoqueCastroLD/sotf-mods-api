/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Step_1Inputs */

const en_manager_step_1 = /** @type {(inputs: Manager_Step_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download SotfModsManager.exe and open it. It finds your game through Steam.`)
};

const es_manager_step_1 = /** @type {(inputs: Manager_Step_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descarga SotfModsManager.exe y ábrelo. Encuentra tu juego a través de Steam.`)
};

const de_manager_step_1 = /** @type {(inputs: Manager_Step_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lade SotfModsManager.exe herunter und öffne sie. Sie findet dein Spiel über Steam.`)
};

const fr_manager_step_1 = /** @type {(inputs: Manager_Step_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargez SotfModsManager.exe et ouvrez-le. Il trouve votre jeu via Steam.`)
};

const it_manager_step_1 = /** @type {(inputs: Manager_Step_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica SotfModsManager.exe e aprilo. Trova il gioco tramite Steam.`)
};

const nl_manager_step_1 = /** @type {(inputs: Manager_Step_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download SotfModsManager.exe en open het. Het vindt je game via Steam.`)
};

const pl_manager_step_1 = /** @type {(inputs: Manager_Step_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz SotfModsManager.exe i otwórz go. Znajdzie grę przez Steam.`)
};

const pt_manager_step_1 = /** @type {(inputs: Manager_Step_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixe o SotfModsManager.exe e abra. Ele encontra o jogo pela Steam.`)
};

const ru_manager_step_1 = /** @type {(inputs: Manager_Step_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачайте SotfModsManager.exe и откройте его. Он найдёт игру через Steam.`)
};

const sv_manager_step_1 = /** @type {(inputs: Manager_Step_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner SotfModsManager.exe och öppna den. Den hittar spelet via Steam.`)
};

const tr_manager_step_1 = /** @type {(inputs: Manager_Step_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotfModsManager.exe'yi indir ve aç. Oyunu Steam üzerinden bulur.`)
};

const zh_manager_step_1 = /** @type {(inputs: Manager_Step_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载 SotfModsManager.exe 并打开，它会通过 Steam 找到游戏。`)
};

const ja_manager_step_1 = /** @type {(inputs: Manager_Step_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotfModsManager.exe をダウンロードして開きます。Steam からゲームを見つけます。`)
};

/**
* | output |
* | --- |
* | "Download SotfModsManager.exe and open it. It finds your game through Steam." |
*
* @param {Manager_Step_1Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_step_1 = /** @type {((inputs?: Manager_Step_1Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Step_1Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_step_1(inputs)
	if (locale === "de") return de_manager_step_1(inputs)
	if (locale === "fr") return fr_manager_step_1(inputs)
	if (locale === "it") return it_manager_step_1(inputs)
	if (locale === "nl") return nl_manager_step_1(inputs)
	if (locale === "pl") return pl_manager_step_1(inputs)
	if (locale === "pt") return pt_manager_step_1(inputs)
	if (locale === "ru") return ru_manager_step_1(inputs)
	if (locale === "sv") return sv_manager_step_1(inputs)
	if (locale === "tr") return tr_manager_step_1(inputs)
	if (locale === "zh") return zh_manager_step_1(inputs)
	if (locale === "ja") return ja_manager_step_1(inputs)
	return en_manager_step_1(inputs)
});
