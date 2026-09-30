/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Share_PrivateInputs */

const en_kits_share_private = /** @type {(inputs: Kits_Share_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This kit is private: only you can see it. Make it public or unlisted to share it.`)
};

const es_kits_share_private = /** @type {(inputs: Kits_Share_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este kit es privado: solo tú puedes verlo. Hazlo público o no listado para compartirlo.`)
};

const de_kits_share_private = /** @type {(inputs: Kits_Share_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Kit ist privat: Nur du siehst es. Mach es öffentlich oder nicht gelistet, um es zu teilen.`)
};

const fr_kits_share_private = /** @type {(inputs: Kits_Share_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce kit est privé : vous seul le voyez. Rendez-le public ou non répertorié pour le partager.`)
};

const it_kits_share_private = /** @type {(inputs: Kits_Share_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo kit è privato: lo vedi solo tu. Rendilo pubblico o non in elenco per condividerlo.`)
};

const nl_kits_share_private = /** @type {(inputs: Kits_Share_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze kit is privé: alleen jij ziet hem. Maak hem openbaar of niet vermeld om hem te delen.`)
};

const pl_kits_share_private = /** @type {(inputs: Kits_Share_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten zestaw jest prywatny: widzisz go tylko ty. Ustaw go jako publiczny lub niepubliczny, aby go udostępnić.`)
};

const pt_kits_share_private = /** @type {(inputs: Kits_Share_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este kit é privado: só você pode vê-lo. Torne-o público ou não listado para compartilhar.`)
};

const ru_kits_share_private = /** @type {(inputs: Kits_Share_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот набор скрыт: его видите только вы. Сделайте его публичным или доступным по ссылке, чтобы поделиться.`)
};

const sv_kits_share_private = /** @type {(inputs: Kits_Share_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitet är privat: bara du kan se det. Gör det offentligt eller olistat för att dela det.`)
};

const tr_kits_share_private = /** @type {(inputs: Kits_Share_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kit gizli: yalnızca sen görebilirsin. Paylaşmak için herkese açık veya listelenmemiş yap.`)
};

const zh_kits_share_private = /** @type {(inputs: Kits_Share_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这个套装是私密的，只有你能看到。设为公开或仅限链接后才能分享。`)
};

const ja_kits_share_private = /** @type {(inputs: Kits_Share_PrivateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このキットは非公開で、あなたにしか見えません。共有するには公開または限定公開にしてください。`)
};

/**
* | output |
* | --- |
* | "This kit is private: only you can see it. Make it public or unlisted to share it." |
*
* @param {Kits_Share_PrivateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_share_private = /** @type {((inputs?: Kits_Share_PrivateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_PrivateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_share_private(inputs)
	if (locale === "de") return de_kits_share_private(inputs)
	if (locale === "fr") return fr_kits_share_private(inputs)
	if (locale === "it") return it_kits_share_private(inputs)
	if (locale === "nl") return nl_kits_share_private(inputs)
	if (locale === "pl") return pl_kits_share_private(inputs)
	if (locale === "pt") return pt_kits_share_private(inputs)
	if (locale === "ru") return ru_kits_share_private(inputs)
	if (locale === "sv") return sv_kits_share_private(inputs)
	if (locale === "tr") return tr_kits_share_private(inputs)
	if (locale === "zh") return zh_kits_share_private(inputs)
	if (locale === "ja") return ja_kits_share_private(inputs)
	return en_kits_share_private(inputs)
});
