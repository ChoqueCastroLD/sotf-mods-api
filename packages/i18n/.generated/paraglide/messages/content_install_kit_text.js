/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Install_Kit_TextInputs */

const en_content_install_kit_text = /** @type {(inputs: Content_Install_Kit_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A staff-picked set of mods that work well together. A good first load-out.`)
};

const es_content_install_kit_text = /** @type {(inputs: Content_Install_Kit_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una selección del equipo con mods que funcionan bien juntos. Un buen primer equipaje.`)
};

const de_content_install_kit_text = /** @type {(inputs: Content_Install_Kit_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine Auswahl des Teams mit Mods, die gut zusammen funktionieren. Eine gute erste Ausrüstung.`)
};

const fr_content_install_kit_text = /** @type {(inputs: Content_Install_Kit_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une sélection de l’équipe avec des mods qui fonctionnent bien ensemble. Un bon premier paquetage.`)
};

const it_content_install_kit_text = /** @type {(inputs: Content_Install_Kit_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una selezione dello staff con mod che funzionano bene insieme. Un buon primo equipaggiamento.`)
};

const nl_content_install_kit_text = /** @type {(inputs: Content_Install_Kit_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een selectie van het team met mods die goed samenwerken. Een goede eerste uitrusting.`)
};

const pl_content_install_kit_text = /** @type {(inputs: Content_Install_Kit_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybór zespołu: mody, które dobrze działają razem. Dobry pierwszy ekwipunek.`)
};

const pt_content_install_kit_text = /** @type {(inputs: Content_Install_Kit_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma seleção da equipe com mods que funcionam bem juntos. Um bom primeiro equipamento.`)
};

const ru_content_install_kit_text = /** @type {(inputs: Content_Install_Kit_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подборка команды: моды, которые хорошо работают вместе. Хорошее первое снаряжение.`)
};

const sv_content_install_kit_text = /** @type {(inputs: Content_Install_Kit_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett urval från teamet med moddar som fungerar bra ihop. En bra första packning.`)
};

const tr_content_install_kit_text = /** @type {(inputs: Content_Install_Kit_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Birlikte iyi çalışan modlardan oluşan bir ekip seçkisi. İyi bir ilk teçhizat.`)
};

const zh_content_install_kit_text = /** @type {(inputs: Content_Install_Kit_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`团队精选的一组搭配良好的模组，适合作为第一套装备。`)
};

const ja_content_install_kit_text = /** @type {(inputs: Content_Install_Kit_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一緒に使って問題のない MOD をスタッフが選んだセットです。最初の装備にぴったり。`)
};

/**
* | output |
* | --- |
* | "A staff-picked set of mods that work well together. A good first load-out." |
*
* @param {Content_Install_Kit_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_kit_text = /** @type {((inputs?: Content_Install_Kit_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_Kit_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_kit_text(inputs)
	if (locale === "de") return de_content_install_kit_text(inputs)
	if (locale === "fr") return fr_content_install_kit_text(inputs)
	if (locale === "it") return it_content_install_kit_text(inputs)
	if (locale === "nl") return nl_content_install_kit_text(inputs)
	if (locale === "pl") return pl_content_install_kit_text(inputs)
	if (locale === "pt") return pt_content_install_kit_text(inputs)
	if (locale === "ru") return ru_content_install_kit_text(inputs)
	if (locale === "sv") return sv_content_install_kit_text(inputs)
	if (locale === "tr") return tr_content_install_kit_text(inputs)
	if (locale === "zh") return zh_content_install_kit_text(inputs)
	if (locale === "ja") return ja_content_install_kit_text(inputs)
	return en_content_install_kit_text(inputs)
});
