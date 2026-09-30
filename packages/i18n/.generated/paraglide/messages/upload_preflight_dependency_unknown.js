/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Dependency_UnknownInputs */

const en_upload_preflight_dependency_unknown = /** @type {(inputs: Upload_Preflight_Dependency_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A dependency isn’t on SOTF Mods: players will need to find it elsewhere.`)
};

const es_upload_preflight_dependency_unknown = /** @type {(inputs: Upload_Preflight_Dependency_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una dependencia no está en SOTF Mods: los jugadores tendrán que buscarla fuera.`)
};

const de_upload_preflight_dependency_unknown = /** @type {(inputs: Upload_Preflight_Dependency_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine Abhängigkeit ist nicht auf SOTF Mods: Spieler müssen sie woanders finden.`)
};

const fr_upload_preflight_dependency_unknown = /** @type {(inputs: Upload_Preflight_Dependency_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une dépendance n’est pas sur SOTF Mods : les joueurs devront la trouver ailleurs.`)
};

const it_upload_preflight_dependency_unknown = /** @type {(inputs: Upload_Preflight_Dependency_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una dipendenza non è su SOTF Mods: i giocatori dovranno cercarla altrove.`)
};

const nl_upload_preflight_dependency_unknown = /** @type {(inputs: Upload_Preflight_Dependency_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een afhankelijkheid staat niet op SOTF Mods: spelers moeten hem elders zoeken.`)
};

const pl_upload_preflight_dependency_unknown = /** @type {(inputs: Upload_Preflight_Dependency_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jednej zależności nie ma w SOTF Mods: gracze będą musieli jej szukać gdzie indziej.`)
};

const pt_upload_preflight_dependency_unknown = /** @type {(inputs: Upload_Preflight_Dependency_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma dependência não está no SOTF Mods: os jogadores terão de procurá-la em outro lugar.`)
};

const ru_upload_preflight_dependency_unknown = /** @type {(inputs: Upload_Preflight_Dependency_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Одной зависимости нет на SOTF Mods: игрокам придётся искать её в другом месте.`)
};

const sv_upload_preflight_dependency_unknown = /** @type {(inputs: Upload_Preflight_Dependency_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett beroende finns inte på SOTF Mods: spelare får leta efter det någon annanstans.`)
};

const tr_upload_preflight_dependency_unknown = /** @type {(inputs: Upload_Preflight_Dependency_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir bağımlılık SOTF Mods’ta yok: oyuncular onu başka yerde aramak zorunda kalacak.`)
};

const zh_upload_preflight_dependency_unknown = /** @type {(inputs: Upload_Preflight_Dependency_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有依赖不在 SOTF Mods 上：玩家需要去别处寻找。`)
};

const ja_upload_preflight_dependency_unknown = /** @type {(inputs: Upload_Preflight_Dependency_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Modsにない依存関係があります。プレイヤーはほかの場所で探す必要があります。`)
};

/**
* | output |
* | --- |
* | "A dependency isn’t on SOTF Mods: players will need to find it elsewhere." |
*
* @param {Upload_Preflight_Dependency_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_dependency_unknown = /** @type {((inputs?: Upload_Preflight_Dependency_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Dependency_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_dependency_unknown(inputs)
	if (locale === "de") return de_upload_preflight_dependency_unknown(inputs)
	if (locale === "fr") return fr_upload_preflight_dependency_unknown(inputs)
	if (locale === "it") return it_upload_preflight_dependency_unknown(inputs)
	if (locale === "nl") return nl_upload_preflight_dependency_unknown(inputs)
	if (locale === "pl") return pl_upload_preflight_dependency_unknown(inputs)
	if (locale === "pt") return pt_upload_preflight_dependency_unknown(inputs)
	if (locale === "ru") return ru_upload_preflight_dependency_unknown(inputs)
	if (locale === "sv") return sv_upload_preflight_dependency_unknown(inputs)
	if (locale === "tr") return tr_upload_preflight_dependency_unknown(inputs)
	if (locale === "zh") return zh_upload_preflight_dependency_unknown(inputs)
	if (locale === "ja") return ja_upload_preflight_dependency_unknown(inputs)
	return en_upload_preflight_dependency_unknown(inputs)
});
