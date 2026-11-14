/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Features_TitleInputs */

const en_manager_features_title = /** @type {(inputs: Manager_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything you need to mod the game`)
};

const es_manager_features_title = /** @type {(inputs: Manager_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo lo que necesitas para modear el juego`)
};

const de_manager_features_title = /** @type {(inputs: Manager_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles, was du zum Modden brauchst`)
};

const fr_manager_features_title = /** @type {(inputs: Manager_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout ce qu’il faut pour modder le jeu`)
};

const it_manager_features_title = /** @type {(inputs: Manager_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto ciò che serve per moddare il gioco`)
};

const nl_manager_features_title = /** @type {(inputs: Manager_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles wat je nodig hebt om de game te modden`)
};

const pl_manager_features_title = /** @type {(inputs: Manager_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko, czego potrzebujesz do modowania gry`)
};

const pt_manager_features_title = /** @type {(inputs: Manager_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo o que você precisa para modificar o jogo`)
};

const ru_manager_features_title = /** @type {(inputs: Manager_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё, что нужно для модов`)
};

const sv_manager_features_title = /** @type {(inputs: Manager_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt du behöver för att modda spelet`)
};

const tr_manager_features_title = /** @type {(inputs: Manager_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunu modlamak için ihtiyacın olan her şey`)
};

const zh_manager_features_title = /** @type {(inputs: Manager_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`玩模组所需的一切`)
};

const ja_manager_features_title = /** @type {(inputs: Manager_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod 導入に必要なものがすべて`)
};

/**
* | output |
* | --- |
* | "Everything you need to mod the game" |
*
* @param {Manager_Features_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_features_title = /** @type {((inputs?: Manager_Features_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Features_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_features_title(inputs)
	if (locale === "de") return de_manager_features_title(inputs)
	if (locale === "fr") return fr_manager_features_title(inputs)
	if (locale === "it") return it_manager_features_title(inputs)
	if (locale === "nl") return nl_manager_features_title(inputs)
	if (locale === "pl") return pl_manager_features_title(inputs)
	if (locale === "pt") return pt_manager_features_title(inputs)
	if (locale === "ru") return ru_manager_features_title(inputs)
	if (locale === "sv") return sv_manager_features_title(inputs)
	if (locale === "tr") return tr_manager_features_title(inputs)
	if (locale === "zh") return zh_manager_features_title(inputs)
	if (locale === "ja") return ja_manager_features_title(inputs)
	return en_manager_features_title(inputs)
});
