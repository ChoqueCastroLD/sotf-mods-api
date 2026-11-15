/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_App_TextInputs */

const en_manager_app_text = /** @type {(inputs: Manager_App_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If RedLoader is missing, the manager installs it first. Then it downloads the mod and its libraries into the right folders, and warns you if the mod clashes with one you already have.`)
};

const es_manager_app_text = /** @type {(inputs: Manager_App_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si falta RedLoader, el manager lo instala primero. Luego descarga el mod y sus librerías en las carpetas correctas, y te avisa si el mod choca con uno que ya tienes.`)
};

const de_manager_app_text = /** @type {(inputs: Manager_App_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fehlt RedLoader, installiert der Manager ihn zuerst. Dann lädt er den Mod und seine Bibliotheken in die richtigen Ordner und warnt dich, wenn der Mod mit einem vorhandenen kollidiert.`)
};

const fr_manager_app_text = /** @type {(inputs: Manager_App_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si RedLoader manque, le manager l’installe d’abord. Puis il télécharge le mod et ses bibliothèques dans les bons dossiers, et vous prévient si le mod entre en conflit avec un mod déjà installé.`)
};

const it_manager_app_text = /** @type {(inputs: Manager_App_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se manca RedLoader, il manager lo installa prima. Poi scarica la mod e le sue librerie nelle cartelle giuste e ti avvisa se la mod va in conflitto con una che hai già.`)
};

const nl_manager_app_text = /** @type {(inputs: Manager_App_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontbreekt RedLoader, dan installeert de manager die eerst. Daarna downloadt hij de mod en zijn libraries naar de juiste mappen en waarschuwt hij als de mod botst met een mod die je al hebt.`)
};

const pl_manager_app_text = /** @type {(inputs: Manager_App_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeśli brakuje RedLoadera, menedżer najpierw go instaluje. Potem pobiera mod i jego biblioteki do właściwych folderów i ostrzega, jeśli mod koliduje z już zainstalowanym.`)
};

const pt_manager_app_text = /** @type {(inputs: Manager_App_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se faltar o RedLoader, o manager instala primeiro. Depois baixa o mod e as bibliotecas nas pastas certas e avisa se o mod entra em conflito com um que você já tem.`)
};

const ru_manager_app_text = /** @type {(inputs: Manager_App_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Если RedLoader нет, менеджер сначала установит его. Затем скачает мод и его библиотеки в нужные папки и предупредит, если мод конфликтует с уже установленным.`)
};

const sv_manager_app_text = /** @type {(inputs: Manager_App_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saknas RedLoader installerar managern det först. Sedan laddar den ner modden och dess bibliotek till rätt mappar och varnar om modden krockar med en du redan har.`)
};

const tr_manager_app_text = /** @type {(inputs: Manager_App_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader yoksa yönetici önce onu kurar. Ardından modu ve kütüphanelerini doğru klasörlere indirir, mod zaten kurulu olan biriyle çakışıyorsa uyarır.`)
};

const zh_manager_app_text = /** @type {(inputs: Manager_App_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如果缺少 RedLoader，管理器会先安装它。然后把模组和依赖库下载到正确的文件夹，并在模组与已安装的模组冲突时提醒你。`)
};

const ja_manager_app_text = /** @type {(inputs: Manager_App_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader がなければ先にインストールします。次に Mod とそのライブラリを正しいフォルダにダウンロードし、すでにある Mod と競合する場合は警告します。`)
};

/**
* | output |
* | --- |
* | "If RedLoader is missing, the manager installs it first. Then it downloads the mod and its libraries into the right folders, and warns you if the mod clashes ..." |
*
* @param {Manager_App_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_app_text = /** @type {((inputs?: Manager_App_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_App_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_app_text(inputs)
	if (locale === "de") return de_manager_app_text(inputs)
	if (locale === "fr") return fr_manager_app_text(inputs)
	if (locale === "it") return it_manager_app_text(inputs)
	if (locale === "nl") return nl_manager_app_text(inputs)
	if (locale === "pl") return pl_manager_app_text(inputs)
	if (locale === "pt") return pt_manager_app_text(inputs)
	if (locale === "ru") return ru_manager_app_text(inputs)
	if (locale === "sv") return sv_manager_app_text(inputs)
	if (locale === "tr") return tr_manager_app_text(inputs)
	if (locale === "zh") return zh_manager_app_text(inputs)
	if (locale === "ja") return ja_manager_app_text(inputs)
	return en_manager_app_text(inputs)
});
