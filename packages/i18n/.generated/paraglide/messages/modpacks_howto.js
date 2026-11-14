/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_HowtoInputs */

const en_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open the downloaded .sotfprofile file in SotF Mods Manager (Profiles, Import profile) to install every mod.`)
};

const es_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abre el archivo .sotfprofile descargado en SotF Mods Manager (Perfiles, Importar perfil) para instalar todos los mods.`)
};

const de_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffne die heruntergeladene .sotfprofile-Datei in SotF Mods Manager (Profile, Profil importieren), um alle Mods zu installieren.`)
};

const fr_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrez le fichier .sotfprofile téléchargé dans SotF Mods Manager (Profils, Importer un profil) pour installer tous les mods.`)
};

const it_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri il file .sotfprofile scaricato in SotF Mods Manager (Profili, Importa profilo) per installare tutte le mod.`)
};

const nl_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open het gedownloade .sotfprofile-bestand in SotF Mods Manager (Profielen, Profiel importeren) om alle mods te installeren.`)
};

const pl_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz pobrany plik .sotfprofile w SotF Mods Manager (Profile, Importuj profil), aby zainstalować wszystkie mody.`)
};

const pt_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abra o arquivo .sotfprofile baixado no SotF Mods Manager (Perfis, Importar perfil) para instalar todos os mods.`)
};

const ru_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Откройте скачанный файл .sotfprofile в SotF Mods Manager (Профили, Импорт профиля), чтобы установить все моды.`)
};

const sv_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna den nedladdade .sotfprofile-filen i SotF Mods Manager (Profiler, Importera profil) för att installera alla moddar.`)
};

const tr_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm modları kurmak için indirilen .sotfprofile dosyasını SotF Mods Manager'da aç (Profiller, Profili içe aktar).`)
};

const zh_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 SotF Mods Manager 中打开下载的 .sotfprofile 文件（配置文件 → 导入配置文件），即可安装所有模组。`)
};

const ja_modpacks_howto = /** @type {(inputs: Modpacks_HowtoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロードした .sotfprofile ファイルを SotF Mods Manager で開くと（プロファイル → プロファイルをインポート）、すべての Mod がインストールされます。`)
};

/**
* | output |
* | --- |
* | "Open the downloaded .sotfprofile file in SotF Mods Manager (Profiles, Import profile) to install every mod." |
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
