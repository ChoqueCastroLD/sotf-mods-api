/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Feature_Modpacks_TextInputs */

const en_manager_feature_modpacks_text = /** @type {(inputs: Manager_Feature_Modpacks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open a modpack from the site and it becomes a new profile with all its mods, ready to play.`)
};

const es_manager_feature_modpacks_text = /** @type {(inputs: Manager_Feature_Modpacks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abre un modpack desde el sitio y se convierte en un perfil nuevo con todos sus mods, listo para jugar.`)
};

const de_manager_feature_modpacks_text = /** @type {(inputs: Manager_Feature_Modpacks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffne ein Modpack von der Seite und es wird zu einem neuen Profil mit all seinen Mods, bereit zum Spielen.`)
};

const fr_manager_feature_modpacks_text = /** @type {(inputs: Manager_Feature_Modpacks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrez un modpack depuis le site : il devient un nouveau profil avec tous ses mods, prêt à jouer.`)
};

const it_manager_feature_modpacks_text = /** @type {(inputs: Manager_Feature_Modpacks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri un modpack dal sito e diventa un nuovo profilo con tutte le sue mod, pronto per giocare.`)
};

const nl_manager_feature_modpacks_text = /** @type {(inputs: Manager_Feature_Modpacks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open een modpack van de site en het wordt een nieuw profiel met al zijn mods, klaar om te spelen.`)
};

const pl_manager_feature_modpacks_text = /** @type {(inputs: Manager_Feature_Modpacks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz modpack ze strony, a stanie się nowym profilem ze wszystkimi modami, gotowym do gry.`)
};

const pt_manager_feature_modpacks_text = /** @type {(inputs: Manager_Feature_Modpacks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abra um modpack no site e ele vira um novo perfil com todos os mods, pronto para jogar.`)
};

const ru_manager_feature_modpacks_text = /** @type {(inputs: Manager_Feature_Modpacks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Откройте модпак с сайта, и он станет новым профилем со всеми модами, готовым к игре.`)
};

const sv_manager_feature_modpacks_text = /** @type {(inputs: Manager_Feature_Modpacks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna ett modpaket från sidan så blir det en ny profil med alla moddar, redo att spela.`)
};

const tr_manager_feature_modpacks_text = /** @type {(inputs: Manager_Feature_Modpacks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siteden bir mod paketi aç, tüm modlarıyla oynamaya hazır yeni bir profil olsun.`)
};

const zh_manager_feature_modpacks_text = /** @type {(inputs: Manager_Feature_Modpacks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从网站打开整合包，它会成为一个包含所有模组的新配置，立即可玩。`)
};

const ja_manager_feature_modpacks_text = /** @type {(inputs: Manager_Feature_Modpacks_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイトから Modパックを開くと、すべての Mod を含む新しいプロファイルになり、すぐに遊べます。`)
};

/**
* | output |
* | --- |
* | "Open a modpack from the site and it becomes a new profile with all its mods, ready to play." |
*
* @param {Manager_Feature_Modpacks_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_feature_modpacks_text = /** @type {((inputs?: Manager_Feature_Modpacks_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Feature_Modpacks_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_feature_modpacks_text(inputs)
	if (locale === "de") return de_manager_feature_modpacks_text(inputs)
	if (locale === "fr") return fr_manager_feature_modpacks_text(inputs)
	if (locale === "it") return it_manager_feature_modpacks_text(inputs)
	if (locale === "nl") return nl_manager_feature_modpacks_text(inputs)
	if (locale === "pl") return pl_manager_feature_modpacks_text(inputs)
	if (locale === "pt") return pt_manager_feature_modpacks_text(inputs)
	if (locale === "ru") return ru_manager_feature_modpacks_text(inputs)
	if (locale === "sv") return sv_manager_feature_modpacks_text(inputs)
	if (locale === "tr") return tr_manager_feature_modpacks_text(inputs)
	if (locale === "zh") return zh_manager_feature_modpacks_text(inputs)
	if (locale === "ja") return ja_manager_feature_modpacks_text(inputs)
	return en_manager_feature_modpacks_text(inputs)
});
