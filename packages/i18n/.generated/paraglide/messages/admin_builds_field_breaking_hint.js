/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Field_Breaking_HintInputs */

const en_admin_builds_field_breaking_hint = /** @type {(inputs: Admin_Builds_Field_Breaking_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The patch broke mods (new game version for RedLoader, changed assemblies…).`)
};

const es_admin_builds_field_breaking_hint = /** @type {(inputs: Admin_Builds_Field_Breaking_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El parche rompió mods (nueva versión del juego para RedLoader, ensamblados cambiados…).`)
};

const de_admin_builds_field_breaking_hint = /** @type {(inputs: Admin_Builds_Field_Breaking_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Patch hat Mods kaputt gemacht (neue Spielversion für RedLoader, geänderte Assemblies …).`)
};

const fr_admin_builds_field_breaking_hint = /** @type {(inputs: Admin_Builds_Field_Breaking_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le patch a cassé des mods (nouvelle version du jeu pour RedLoader, assemblies modifiées…).`)
};

const it_admin_builds_field_breaking_hint = /** @type {(inputs: Admin_Builds_Field_Breaking_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La patch ha rotto delle mod (nuova versione del gioco per RedLoader, assembly cambiati…).`)
};

const nl_admin_builds_field_breaking_hint = /** @type {(inputs: Admin_Builds_Field_Breaking_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De patch heeft mods gebroken (nieuwe gameversie voor RedLoader, gewijzigde assemblies…).`)
};

const pl_admin_builds_field_breaking_hint = /** @type {(inputs: Admin_Builds_Field_Breaking_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Łatka zepsuła mody (nowa wersja gry dla RedLoadera, zmienione assembly…).`)
};

const pt_admin_builds_field_breaking_hint = /** @type {(inputs: Admin_Builds_Field_Breaking_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O patch quebrou mods (nova versão do jogo para o RedLoader, assemblies alterados…).`)
};

const ru_admin_builds_field_breaking_hint = /** @type {(inputs: Admin_Builds_Field_Breaking_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Патч сломал моды (новая версия игры для RedLoader, изменённые сборки .NET…).`)
};

const sv_admin_builds_field_breaking_hint = /** @type {(inputs: Admin_Builds_Field_Breaking_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patchen bröt moddar (ny spelversion för RedLoader, ändrade assemblies …).`)
};

const tr_admin_builds_field_breaking_hint = /** @type {(inputs: Admin_Builds_Field_Breaking_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yama modları bozdu (RedLoader için yeni oyun sürümü, değişen assembly’ler…).`)
};

const zh_admin_builds_field_breaking_hint = /** @type {(inputs: Admin_Builds_Field_Breaking_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这个补丁破坏了模组（RedLoader 需要适配新游戏版本、程序集有变化……）。`)
};

const ja_admin_builds_field_breaking_hint = /** @type {(inputs: Admin_Builds_Field_Breaking_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このパッチで MOD が動かなくなった（RedLoader 向けの新しいゲームバージョン、アセンブリの変更など）。`)
};

/**
* | output |
* | --- |
* | "The patch broke mods (new game version for RedLoader, changed assemblies…)." |
*
* @param {Admin_Builds_Field_Breaking_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_field_breaking_hint = /** @type {((inputs?: Admin_Builds_Field_Breaking_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Field_Breaking_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_field_breaking_hint(inputs)
	if (locale === "de") return de_admin_builds_field_breaking_hint(inputs)
	if (locale === "fr") return fr_admin_builds_field_breaking_hint(inputs)
	if (locale === "it") return it_admin_builds_field_breaking_hint(inputs)
	if (locale === "nl") return nl_admin_builds_field_breaking_hint(inputs)
	if (locale === "pl") return pl_admin_builds_field_breaking_hint(inputs)
	if (locale === "pt") return pt_admin_builds_field_breaking_hint(inputs)
	if (locale === "ru") return ru_admin_builds_field_breaking_hint(inputs)
	if (locale === "sv") return sv_admin_builds_field_breaking_hint(inputs)
	if (locale === "tr") return tr_admin_builds_field_breaking_hint(inputs)
	if (locale === "zh") return zh_admin_builds_field_breaking_hint(inputs)
	if (locale === "ja") return ja_admin_builds_field_breaking_hint(inputs)
	return en_admin_builds_field_breaking_hint(inputs)
});
