/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Profiles_TextInputs */

const en_manager_profiles_text = /** @type {(inputs: Manager_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep one set of mods for solo and another for multiplayer, and switch between them without downloading anything again. Modpacks from this site open as a new profile.`)
};

const es_manager_profiles_text = /** @type {(inputs: Manager_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten un conjunto de mods para jugar solo y otro para multijugador, y cambia entre ellos sin volver a descargar nada. Los modpacks de este sitio se abren como un perfil nuevo.`)
};

const de_manager_profiles_text = /** @type {(inputs: Manager_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Halte ein Mod-Set für Solo und eines für Multiplayer und wechsle zwischen ihnen, ohne etwas neu herunterzuladen. Modpacks von dieser Seite öffnen sich als neues Profil.`)
};

const fr_manager_profiles_text = /** @type {(inputs: Manager_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gardez un ensemble de mods pour le solo et un autre pour le multijoueur, et passez de l’un à l’autre sans rien retélécharger. Les modpacks de ce site s’ouvrent comme un nouveau profil.`)
};

const it_manager_profiles_text = /** @type {(inputs: Manager_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tieni un set di mod per giocare da solo e uno per il multigiocatore, e passa dall’uno all’altro senza riscaricare nulla. I modpack di questo sito si aprono come nuovo profilo.`)
};

const nl_manager_profiles_text = /** @type {(inputs: Manager_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Houd één set mods voor solo en één voor multiplayer en wissel ertussen zonder opnieuw te downloaden. Modpacks van deze site openen als een nieuw profiel.`)
};

const pl_manager_profiles_text = /** @type {(inputs: Manager_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trzymaj jeden zestaw modów do gry solo, a drugi do multiplayera, i przełączaj się bez ponownego pobierania. Modpacki z tej strony otwierają się jako nowy profil.`)
};

const pt_manager_profiles_text = /** @type {(inputs: Manager_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tenha um conjunto de mods para jogar sozinho e outro para multijogador, e troque entre eles sem baixar nada de novo. Os modpacks deste site abrem como um novo perfil.`)
};

const ru_manager_profiles_text = /** @type {(inputs: Manager_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Держите один набор модов для одиночной игры и другой для сетевой и переключайтесь между ними без повторной загрузки. Модпаки с этого сайта открываются как новый профиль.`)
};

const sv_manager_profiles_text = /** @type {(inputs: Manager_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ha en moddsamling för solo och en för multiplayer och växla mellan dem utan att ladda ner något igen. Modpaket från den här sidan öppnas som en ny profil.`)
};

const tr_manager_profiles_text = /** @type {(inputs: Manager_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tek oyunculu için bir, çok oyunculu için başka bir mod seti tut ve hiçbir şeyi yeniden indirmeden aralarında geçiş yap. Bu sitedeki mod paketleri yeni bir profil olarak açılır.`)
};

const zh_manager_profiles_text = /** @type {(inputs: Manager_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为单人和多人游戏分别保留一套模组，切换时无需重新下载。本站的整合包会作为新配置打开。`)
};

const ja_manager_profiles_text = /** @type {(inputs: Manager_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ソロ用とマルチ用で別々の Mod セットを持ち、再ダウンロードなしで切り替えられます。このサイトの Modパックは新しいプロファイルとして開きます。`)
};

/**
* | output |
* | --- |
* | "Keep one set of mods for solo and another for multiplayer, and switch between them without downloading anything again. Modpacks from this site open as a new ..." |
*
* @param {Manager_Profiles_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_profiles_text = /** @type {((inputs?: Manager_Profiles_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Profiles_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_profiles_text(inputs)
	if (locale === "de") return de_manager_profiles_text(inputs)
	if (locale === "fr") return fr_manager_profiles_text(inputs)
	if (locale === "it") return it_manager_profiles_text(inputs)
	if (locale === "nl") return nl_manager_profiles_text(inputs)
	if (locale === "pl") return pl_manager_profiles_text(inputs)
	if (locale === "pt") return pt_manager_profiles_text(inputs)
	if (locale === "ru") return ru_manager_profiles_text(inputs)
	if (locale === "sv") return sv_manager_profiles_text(inputs)
	if (locale === "tr") return tr_manager_profiles_text(inputs)
	if (locale === "zh") return zh_manager_profiles_text(inputs)
	if (locale === "ja") return ja_manager_profiles_text(inputs)
	return en_manager_profiles_text(inputs)
});
