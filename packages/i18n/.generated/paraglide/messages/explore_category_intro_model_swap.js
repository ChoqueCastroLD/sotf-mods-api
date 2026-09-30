/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Category_Intro_Model_SwapInputs */

const en_explore_category_intro_model_swap = /** @type {(inputs: Explore_Category_Intro_Model_SwapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replace in-game models with new ones: characters, creatures, weapons and props.`)
};

const es_explore_category_intro_model_swap = /** @type {(inputs: Explore_Category_Intro_Model_SwapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sustituye modelos del juego por otros nuevos: personajes, criaturas, armas y objetos.`)
};

const de_explore_category_intro_model_swap = /** @type {(inputs: Explore_Category_Intro_Model_SwapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersetze Modelle im Spiel durch neue: Figuren, Kreaturen, Waffen und Objekte.`)
};

const fr_explore_category_intro_model_swap = /** @type {(inputs: Explore_Category_Intro_Model_SwapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remplacez des modèles du jeu par de nouveaux : personnages, créatures, armes et objets.`)
};

const it_explore_category_intro_model_swap = /** @type {(inputs: Explore_Category_Intro_Model_SwapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sostituisci i modelli del gioco con altri nuovi: personaggi, creature, armi e oggetti.`)
};

const nl_explore_category_intro_model_swap = /** @type {(inputs: Explore_Category_Intro_Model_SwapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vervang modellen in het spel door nieuwe: personages, wezens, wapens en objecten.`)
};

const pl_explore_category_intro_model_swap = /** @type {(inputs: Explore_Category_Intro_Model_SwapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamień modele w grze na nowe: postacie, stwory, bronie i przedmioty.`)
};

const pt_explore_category_intro_model_swap = /** @type {(inputs: Explore_Category_Intro_Model_SwapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Troque modelos do jogo por novos: personagens, criaturas, armas e objetos.`)
};

const ru_explore_category_intro_model_swap = /** @type {(inputs: Explore_Category_Intro_Model_SwapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Замените модели в игре на новые: персонажей, существ, оружие и предметы.`)
};

const sv_explore_category_intro_model_swap = /** @type {(inputs: Explore_Category_Intro_Model_SwapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byt ut modeller i spelet mot nya: karaktärer, varelser, vapen och föremål.`)
};

const tr_explore_category_intro_model_swap = /** @type {(inputs: Explore_Category_Intro_Model_SwapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyundaki modelleri yenileriyle değiştir: karakterler, yaratıklar, silahlar ve nesneler.`)
};

const zh_explore_category_intro_model_swap = /** @type {(inputs: Explore_Category_Intro_Model_SwapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用新模型替换游戏内模型：角色、生物、武器和道具。`)
};

const ja_explore_category_intro_model_swap = /** @type {(inputs: Explore_Category_Intro_Model_SwapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲーム内のモデルを新しいものに差し替え。キャラクター、クリーチャー、武器、小物など。`)
};

/**
* | output |
* | --- |
* | "Replace in-game models with new ones: characters, creatures, weapons and props." |
*
* @param {Explore_Category_Intro_Model_SwapInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_category_intro_model_swap = /** @type {((inputs?: Explore_Category_Intro_Model_SwapInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_Model_SwapInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_category_intro_model_swap(inputs)
	if (locale === "de") return de_explore_category_intro_model_swap(inputs)
	if (locale === "fr") return fr_explore_category_intro_model_swap(inputs)
	if (locale === "it") return it_explore_category_intro_model_swap(inputs)
	if (locale === "nl") return nl_explore_category_intro_model_swap(inputs)
	if (locale === "pl") return pl_explore_category_intro_model_swap(inputs)
	if (locale === "pt") return pt_explore_category_intro_model_swap(inputs)
	if (locale === "ru") return ru_explore_category_intro_model_swap(inputs)
	if (locale === "sv") return sv_explore_category_intro_model_swap(inputs)
	if (locale === "tr") return tr_explore_category_intro_model_swap(inputs)
	if (locale === "zh") return zh_explore_category_intro_model_swap(inputs)
	if (locale === "ja") return ja_explore_category_intro_model_swap(inputs)
	return en_explore_category_intro_model_swap(inputs)
});
