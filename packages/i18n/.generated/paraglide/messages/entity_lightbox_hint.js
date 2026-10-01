/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Entity_Lightbox_HintInputs */

const en_entity_lightbox_hint = /** @type {(inputs: Entity_Lightbox_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pinch or double-tap to zoom, swipe down to close.`)
};

const es_entity_lightbox_hint = /** @type {(inputs: Entity_Lightbox_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pellizca o toca dos veces para ampliar; desliza hacia abajo para cerrar.`)
};

const de_entity_lightbox_hint = /** @type {(inputs: Entity_Lightbox_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Zoomen spreizen oder doppeltippen, zum Schließen nach unten wischen.`)
};

const fr_entity_lightbox_hint = /** @type {(inputs: Entity_Lightbox_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pincez ou touchez deux fois pour zoomer, glissez vers le bas pour fermer.`)
};

const it_entity_lightbox_hint = /** @type {(inputs: Entity_Lightbox_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pizzica o tocca due volte per ingrandire, scorri verso il basso per chiudere.`)
};

const nl_entity_lightbox_hint = /** @type {(inputs: Entity_Lightbox_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Knijp of tik twee keer om te zoomen, veeg omlaag om te sluiten.`)
};

const pl_entity_lightbox_hint = /** @type {(inputs: Entity_Lightbox_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ściągnij palce lub dotknij dwukrotnie, aby powiększyć; przesuń w dół, aby zamknąć.`)
};

const pt_entity_lightbox_hint = /** @type {(inputs: Entity_Lightbox_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faça pinça ou toque duas vezes para ampliar; deslize para baixo para fechar.`)
};

const ru_entity_lightbox_hint = /** @type {(inputs: Entity_Lightbox_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разведите пальцы или коснитесь дважды, чтобы увеличить; смахните вниз, чтобы закрыть.`)
};

const sv_entity_lightbox_hint = /** @type {(inputs: Entity_Lightbox_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyp eller dubbeltryck för att zooma, svep nedåt för att stänga.`)
};

const tr_entity_lightbox_hint = /** @type {(inputs: Entity_Lightbox_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yakınlaştırmak için çimdikleyin veya çift dokunun, kapatmak için aşağı kaydırın.`)
};

const zh_entity_lightbox_hint = /** @type {(inputs: Entity_Lightbox_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`双指捏合或双击可缩放，向下滑动可关闭。`)
};

const ja_entity_lightbox_hint = /** @type {(inputs: Entity_Lightbox_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ピンチまたはダブルタップで拡大、下にスワイプで閉じます。`)
};

/**
* | output |
* | --- |
* | "Pinch or double-tap to zoom, swipe down to close." |
*
* @param {Entity_Lightbox_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const entity_lightbox_hint = /** @type {((inputs?: Entity_Lightbox_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Entity_Lightbox_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_entity_lightbox_hint(inputs)
	if (locale === "de") return de_entity_lightbox_hint(inputs)
	if (locale === "fr") return fr_entity_lightbox_hint(inputs)
	if (locale === "it") return it_entity_lightbox_hint(inputs)
	if (locale === "nl") return nl_entity_lightbox_hint(inputs)
	if (locale === "pl") return pl_entity_lightbox_hint(inputs)
	if (locale === "pt") return pt_entity_lightbox_hint(inputs)
	if (locale === "ru") return ru_entity_lightbox_hint(inputs)
	if (locale === "sv") return sv_entity_lightbox_hint(inputs)
	if (locale === "tr") return tr_entity_lightbox_hint(inputs)
	if (locale === "zh") return zh_entity_lightbox_hint(inputs)
	if (locale === "ja") return ja_entity_lightbox_hint(inputs)
	return en_entity_lightbox_hint(inputs)
});
