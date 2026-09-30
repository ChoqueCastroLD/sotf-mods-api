/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ game: NonNullable<unknown>, loader: NonNullable<unknown> }} Content_Install_VerifiedInputs */

const en_content_install_verified = /** @type {(inputs: Content_Install_VerifiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verified with game ${i?.game} · RedLoader ${i?.loader}`)
};

const es_content_install_verified = /** @type {(inputs: Content_Install_VerifiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verificado con el juego ${i?.game} · RedLoader ${i?.loader}`)
};

const de_content_install_verified = /** @type {(inputs: Content_Install_VerifiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geprüft mit Spiel ${i?.game} · RedLoader ${i?.loader}`)
};

const fr_content_install_verified = /** @type {(inputs: Content_Install_VerifiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vérifié avec le jeu ${i?.game} · RedLoader ${i?.loader}`)
};

const it_content_install_verified = /** @type {(inputs: Content_Install_VerifiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verificato con il gioco ${i?.game} · RedLoader ${i?.loader}`)
};

const nl_content_install_verified = /** @type {(inputs: Content_Install_VerifiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gecontroleerd met game ${i?.game} · RedLoader ${i?.loader}`)
};

const pl_content_install_verified = /** @type {(inputs: Content_Install_VerifiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sprawdzone z grą ${i?.game} · RedLoader ${i?.loader}`)
};

const pt_content_install_verified = /** @type {(inputs: Content_Install_VerifiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verificado com o jogo ${i?.game} · RedLoader ${i?.loader}`)
};

const ru_content_install_verified = /** @type {(inputs: Content_Install_VerifiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Проверено на игре ${i?.game} · RedLoader ${i?.loader}`)
};

const sv_content_install_verified = /** @type {(inputs: Content_Install_VerifiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kontrollerad med spelet ${i?.game} · RedLoader ${i?.loader}`)
};

const tr_content_install_verified = /** @type {(inputs: Content_Install_VerifiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oyun ${i?.game} · RedLoader ${i?.loader} ile doğrulandı`)
};

const zh_content_install_verified = /** @type {(inputs: Content_Install_VerifiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已在游戏 ${i?.game} · RedLoader ${i?.loader} 上验证`)
};

const ja_content_install_verified = /** @type {(inputs: Content_Install_VerifiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ゲーム ${i?.game} · RedLoader ${i?.loader} で確認済み`)
};

/**
* | output |
* | --- |
* | "Verified with game {game} · RedLoader {loader}" |
*
* @param {Content_Install_VerifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_verified = /** @type {((inputs: Content_Install_VerifiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_VerifiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_verified(inputs)
	if (locale === "de") return de_content_install_verified(inputs)
	if (locale === "fr") return fr_content_install_verified(inputs)
	if (locale === "it") return it_content_install_verified(inputs)
	if (locale === "nl") return nl_content_install_verified(inputs)
	if (locale === "pl") return pl_content_install_verified(inputs)
	if (locale === "pt") return pt_content_install_verified(inputs)
	if (locale === "ru") return ru_content_install_verified(inputs)
	if (locale === "sv") return sv_content_install_verified(inputs)
	if (locale === "tr") return tr_content_install_verified(inputs)
	if (locale === "zh") return zh_content_install_verified(inputs)
	if (locale === "ja") return ja_content_install_verified(inputs)
	return en_content_install_verified(inputs)
});
