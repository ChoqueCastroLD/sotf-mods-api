/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_HowtoInputs */

const en_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager installs every mod of the modpack as a new profile. You can also download the .sotfprofile file and import it.`)
};

const es_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager instala todos los mods del modpack como un perfil nuevo. También puedes descargar el archivo .sotfprofile e importarlo.`)
};

const de_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager installiert alle Mods des Modpacks als neues Profil. Du kannst auch die .sotfprofile-Datei herunterladen und importieren.`)
};

const fr_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager installe tous les mods du modpack dans un nouveau profil. Vous pouvez aussi télécharger le fichier .sotfprofile et l’importer.`)
};

const it_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager installa tutte le mod del modpack come nuovo profilo. Puoi anche scaricare il file .sotfprofile e importarlo.`)
};

const nl_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager installeert alle mods van de modpack als een nieuw profiel. Je kunt ook het .sotfprofile-bestand downloaden en importeren.`)
};

const pl_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager instaluje wszystkie mody modpacka jako nowy profil. Możesz też pobrać plik .sotfprofile i go zaimportować.`)
};

const pt_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O SotF Mods Manager instala todos os mods do modpack como um novo perfil. Você também pode baixar o arquivo .sotfprofile e importá-lo.`)
};

const ru_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager устанавливает все моды модпака как новый профиль. Можно также скачать файл .sotfprofile и импортировать его.`)
};

const sv_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager installerar alla moddar i modpaketet som en ny profil. Du kan också ladda ner .sotfprofile-filen och importera den.`)
};

const tr_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager mod paketindeki tüm modları yeni bir profil olarak kurar. .sotfprofile dosyasını indirip içe de aktarabilirsin.`)
};

const zh_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager 会把整合包的所有模组安装为一个新配置。你也可以下载 .sotfprofile 文件后导入。`)
};

const ja_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager は Modパックのすべての Mod を新しいプロファイルとしてインストールします。.sotfprofile ファイルをダウンロードしてインポートすることもできます。`)
};

/**
* | output |
* | --- |
* | "SotF Mods Manager installs every mod of the modpack as a new profile. You can also download the .sotfprofile file and import it." |
*
* @param {Modpacks_HowtoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_howto = /** @type {((inputs?: Modpacks_HowtoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_HowtoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_howto(inputs)
	if (locale === "de") return de_modpacks_howto(inputs)
	if (locale === "fr") return fr_modpacks_howto(inputs)
	if (locale === "it") return it_modpacks_howto(inputs)
	if (locale === "nl") return nl_modpacks_howto(inputs)
	if (locale === "pl") return pl_modpacks_howto(inputs)
	if (locale === "pt") return pt_modpacks_howto(inputs)
	if (locale === "ru") return ru_modpacks_howto(inputs)
	if (locale === "sv") return sv_modpacks_howto(inputs)
	if (locale === "tr") return tr_modpacks_howto(inputs)
	if (locale === "zh") return zh_modpacks_howto(inputs)
	if (locale === "ja") return ja_modpacks_howto(inputs)
	return en_modpacks_howto(inputs)
});
