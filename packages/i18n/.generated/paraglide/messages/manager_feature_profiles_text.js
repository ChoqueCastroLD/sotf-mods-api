/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Feature_Profiles_TextInputs */

const en_manager_feature_profiles_text = /** @type {(inputs: Manager_Feature_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep separate mod sets for solo and multiplayer and switch between them instantly.`)
};

const es_manager_feature_profiles_text = /** @type {(inputs: Manager_Feature_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten conjuntos de mods separados para jugar solo y en multijugador, y cambia entre ellos al instante.`)
};

const de_manager_feature_profiles_text = /** @type {(inputs: Manager_Feature_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Halte getrennte Mod-Sets für Solo und Multiplayer und wechsle sofort zwischen ihnen.`)
};

const fr_manager_feature_profiles_text = /** @type {(inputs: Manager_Feature_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gardez des ensembles de mods séparés pour le solo et le multijoueur, et passez de l’un à l’autre instantanément.`)
};

const it_manager_feature_profiles_text = /** @type {(inputs: Manager_Feature_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tieni set di mod separati per giocare da solo e in multigiocatore e passa dall’uno all’altro all’istante.`)
};

const nl_manager_feature_profiles_text = /** @type {(inputs: Manager_Feature_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Houd aparte modsets voor solo en multiplayer en wissel er direct tussen.`)
};

const pl_manager_feature_profiles_text = /** @type {(inputs: Manager_Feature_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trzymaj osobne zestawy modów do gry solo i w trybie wieloosobowym i przełączaj się między nimi od razu.`)
};

const pt_manager_feature_profiles_text = /** @type {(inputs: Manager_Feature_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mantenha conjuntos de mods separados para jogar sozinho e em multijogador e troque entre eles na hora.`)
};

const ru_manager_feature_profiles_text = /** @type {(inputs: Manager_Feature_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Держите отдельные наборы модов для одиночной и сетевой игры и мгновенно переключайтесь между ними.`)
};

const sv_manager_feature_profiles_text = /** @type {(inputs: Manager_Feature_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ha separata moddsamlingar för solo och multiplayer och växla mellan dem direkt.`)
};

const tr_manager_feature_profiles_text = /** @type {(inputs: Manager_Feature_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tek oyunculu ve çok oyunculu için ayrı mod setleri tut, aralarında anında geçiş yap.`)
};

const zh_manager_feature_profiles_text = /** @type {(inputs: Manager_Feature_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为单人和多人游戏保留不同的模组组合，随时切换。`)
};

const ja_manager_feature_profiles_text = /** @type {(inputs: Manager_Feature_Profiles_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ソロ用とマルチ用で別々の Mod セットを持ち、すぐに切り替えられます。`)
};

/**
* | output |
* | --- |
* | "Keep separate mod sets for solo and multiplayer and switch between them instantly." |
*
* @param {Manager_Feature_Profiles_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_feature_profiles_text = /** @type {((inputs?: Manager_Feature_Profiles_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Feature_Profiles_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_feature_profiles_text(inputs)
	if (locale === "de") return de_manager_feature_profiles_text(inputs)
	if (locale === "fr") return fr_manager_feature_profiles_text(inputs)
	if (locale === "it") return it_manager_feature_profiles_text(inputs)
	if (locale === "nl") return nl_manager_feature_profiles_text(inputs)
	if (locale === "pl") return pl_manager_feature_profiles_text(inputs)
	if (locale === "pt") return pt_manager_feature_profiles_text(inputs)
	if (locale === "ru") return ru_manager_feature_profiles_text(inputs)
	if (locale === "sv") return sv_manager_feature_profiles_text(inputs)
	if (locale === "tr") return tr_manager_feature_profiles_text(inputs)
	if (locale === "zh") return zh_manager_feature_profiles_text(inputs)
	if (locale === "ja") return ja_manager_feature_profiles_text(inputs)
	return en_manager_feature_profiles_text(inputs)
});
