/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Category_Intro_Vehicles_MovementInputs */

const en_explore_category_intro_vehicles_movement = /** @type {(inputs: Explore_Category_Intro_Vehicles_MovementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Golf carts, gliders, knight suits and new ways to get around: speed, handling and traversal.`)
};

const es_explore_category_intro_vehicles_movement = /** @type {(inputs: Explore_Category_Intro_Vehicles_MovementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carritos de golf, planeadores, trajes de caballero y nuevas formas de moverse: velocidad, manejo y desplazamiento.`)
};

const de_explore_category_intro_vehicles_movement = /** @type {(inputs: Explore_Category_Intro_Vehicles_MovementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Golfwagen, Gleiter, Ritterrüstungen und neue Fortbewegung: Tempo, Steuerung und Bewegung.`)
};

const fr_explore_category_intro_vehicles_movement = /** @type {(inputs: Explore_Category_Intro_Vehicles_MovementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voiturettes de golf, planeurs, armures de chevalier et nouveaux déplacements : vitesse, maniabilité et traversée.`)
};

const it_explore_category_intro_vehicles_movement = /** @type {(inputs: Explore_Category_Intro_Vehicles_MovementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Golf cart, deltaplani, armature da cavaliere e nuovi modi di muoversi: velocità, guida e spostamenti.`)
};

const nl_explore_category_intro_vehicles_movement = /** @type {(inputs: Explore_Category_Intro_Vehicles_MovementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Golfkarretjes, zweefvliegers, ridderpakken en nieuwe manieren om je te verplaatsen: snelheid, besturing en bewegen.`)
};

const pl_explore_category_intro_vehicles_movement = /** @type {(inputs: Explore_Category_Intro_Vehicles_MovementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wózki golfowe, lotnie, zbroje rycerskie i nowe sposoby poruszania się: prędkość, sterowanie i przemieszczanie.`)
};

const pt_explore_category_intro_vehicles_movement = /** @type {(inputs: Explore_Category_Intro_Vehicles_MovementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carrinhos de golfe, planadores, armaduras de cavaleiro e novas formas de se locomover: velocidade, controle e deslocamento.`)
};

const ru_explore_category_intro_vehicles_movement = /** @type {(inputs: Explore_Category_Intro_Vehicles_MovementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Гольф-кары, дельтапланы, рыцарские доспехи и новые способы передвижения: скорость, управление и перемещение.`)
};

const sv_explore_category_intro_vehicles_movement = /** @type {(inputs: Explore_Category_Intro_Vehicles_MovementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Golfbilar, glidflygplan, riddarrustningar och nya sätt att ta sig fram: fart, styrning och förflyttning.`)
};

const tr_explore_category_intro_vehicles_movement = /** @type {(inputs: Explore_Category_Intro_Vehicles_MovementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Golf arabaları, planörler, şövalye zırhları ve yeni ulaşım yolları: hız, kontrol ve hareket.`)
};

const zh_explore_category_intro_vehicles_movement = /** @type {(inputs: Explore_Category_Intro_Vehicles_MovementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`高尔夫球车、滑翔翼、骑士盔甲和新的移动方式：速度、操控与通行。`)
};

const ja_explore_category_intro_vehicles_movement = /** @type {(inputs: Explore_Category_Intro_Vehicles_MovementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゴルフカート、グライダー、騎士の鎧、新しい移動手段。速度、操作性、移動を改善。`)
};

/**
* | output |
* | --- |
* | "Golf carts, gliders, knight suits and new ways to get around: speed, handling and traversal." |
*
* @param {Explore_Category_Intro_Vehicles_MovementInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_category_intro_vehicles_movement = /** @type {((inputs?: Explore_Category_Intro_Vehicles_MovementInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_Vehicles_MovementInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_category_intro_vehicles_movement(inputs)
	if (locale === "de") return de_explore_category_intro_vehicles_movement(inputs)
	if (locale === "fr") return fr_explore_category_intro_vehicles_movement(inputs)
	if (locale === "it") return it_explore_category_intro_vehicles_movement(inputs)
	if (locale === "nl") return nl_explore_category_intro_vehicles_movement(inputs)
	if (locale === "pl") return pl_explore_category_intro_vehicles_movement(inputs)
	if (locale === "pt") return pt_explore_category_intro_vehicles_movement(inputs)
	if (locale === "ru") return ru_explore_category_intro_vehicles_movement(inputs)
	if (locale === "sv") return sv_explore_category_intro_vehicles_movement(inputs)
	if (locale === "tr") return tr_explore_category_intro_vehicles_movement(inputs)
	if (locale === "zh") return zh_explore_category_intro_vehicles_movement(inputs)
	if (locale === "ja") return ja_explore_category_intro_vehicles_movement(inputs)
	return en_explore_category_intro_vehicles_movement(inputs)
});
